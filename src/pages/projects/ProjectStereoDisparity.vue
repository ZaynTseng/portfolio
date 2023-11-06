<template>
  <base-hero>
    <div class="max-w-3xl gap-2 grid">
      <figure>
        <img src="../../assets/projects/stereo-disparity/stereo-disparity-cover.png" alt="Stereo Disparity"
             class="border-base-content bg-base-300 rounded-box border border-opacity-5">
      </figure>
      <h1 class="text-5xl font-bold pt-4">Stereo Disparity</h1>
      <p class="text-2xl">Stereo disparity algorithm experiments and evaluation</p>
      <div class="gap-2 flex pb-6">
        <span class="badge badge-primary">Algorithms</span>
        <span class="badge badge-secondary">Computer Vision</span>
        <span class="badge badge-ghost">October 2022</span>
      </div>
      <h2 class="text-3xl font-bold pt-4">Introduction</h2>
      <p>Stereo matching, which estimates an accurate depth from stereo pair images, is a critical technology for
        helping achieve high-performance 3D applications in the field of computer vision [1]. Many different methods and
        pre-processing steps have been proposed in this field. In this paper, to calculate the disparity maps of the
        given stereo image pairs, different stereo matching algorithms will be compared and the possible optimizations
        from different aspects will be discussed.</p>
      <p>The dataset in this experiment is curated from https://drivingstereo-dataset.github.io. Totally, there are 25
        sets of images, each set has a pair of stereo images taken from a moving vehicle and one ground truth depth
        image. Thus, the disparity map we calculated should be compared with the true depth image to check
        correctness.</p>
      <p>As for the structure of this paper, methods used in the experiment and justification will first be given. Then,
        the specific process of all experiments and the evaluation will be addressed. Lastly, the possible improvement
        of future research will be discussed.</p>
      <h2 class="text-3xl font-bold pt-4">Literature Review</h2>
      <h3 class="text-2xl font-bold pt-4">Stereo Disparity</h3>
      <p>As a way to mimic how the human eyes perceive an image from different positions and process such differences to
        reveal the scene’s depth information [2], computer vision also adopted a similar mechanism to find cues for
        depth. In computer vision, stereo matching is a task to estimate the depth information from a pair of images
        that are normally taken by two horizontally aligned cameras. In detail, it requires the algorithm to find
        matching features from the right image to the left image to get the disparity of pixels and resulting in a
        disparity map, where the disparity is inversely proportional to the distance from the observer [3]. This ability
        to understand the image in the z-coordinate provides the foundation for many applications such as object
        detection, 3D reconstructs, navigation, and autopilot vehicles.</p>
      <p>To find corresponding features in the image pair, a local approach is sliding window, which will traverse the
        image pair and use a cost function to evaluate the pixels in that window and find the best matching blocks for
        each pixel in the left image from the right image pair, thus calculating the disparity. A traditional approach
        of sliding window is sum of squared-differences (SSD), a later one is sum of absolute differences (SAD), and
        normalised cross-correlation (NCC). However, as the name suggests, local approaches inherently lacking
        consideration of global relations, thus, their results normally have lots of artefacts and noise. To solve this
        issue, global algorithms have smoothness assumptions and tried to optimise them with a global cost function
        (likely an energy minimisation formula). Common global algorithms include probabilistic diffusion [4], and graph
        cuts [5]. In this study, the local approach is taken, as they are easier to implement and evaluate.</p>
      <h2 class="text-3xl font-bold pt-4">Methods and Justification</h2>
      <h3 class="text-2xl font-bold pt-4">A. SSD</h3>
      <p>Sum of squared-differences (SSD) is a matching cost computation metric of the pixel values in two windows,
        where both windows should be in the same shape. For SSD, the smallest value in a search range would be the best
        match. SSD serves as a baseline in this study.</p>
      <h3 class="text-2xl font-bold pt-4">B. NCC</h3>
      <p>Different from SSD, normalised cross-correlation (NCC) takes into consideration of the gain differences due to
        normalisation, therefore, it would be more tolerant to brightness changes in the two matching windows and
        resulting in a better performance than SSD. The higher the NCC, the better the similarity between the two
        windows.</p>
      <h3 class="text-2xl font-bold pt-4">C. ZNCC</h3>
      <p>Zero-mean normalised cross-correlation (ZNCC) is an adaptation of NCC that compensates the constant offsets in
        pixel values during matching, this makes it more robust to biases in the matching windows and thus has an
        increased performance than NCC.</p>
      <h3 class="text-2xl font-bold pt-4">D. Design Choices in Implementation</h3>
      <p>Apart from the basic for loop version of the window matching algorithm that traverses the whole image row by
        row and pixel by pixel, which is workable but very inefficient, two variants are also implemented to improve the
        performance. First is the kernel computation version of the same algorithm but using cv2.filter2D to accelerate
        the summation operation in SSD, NCC, and ZNCC. In this kernel computation version, the summations in each for
        loop on windows are replaced by one single operation on the whole image of applying the cv2.filter2D function
        with a filter full of ones at the window size, this can lead to a much faster computation time. Another variant
        is trying to solve the fixed window size issue. In the basic version, the search window size is fixed for all
        the operations for each pixel, however, this might be problematic since one size may not suit all situations on
        the image (e.g., some features might be larger while some others are smaller). Therefore, in the modified
        version, a range of window size will be applied on the same pixel for the left image and its corresponding right
        pixel in the search range, and the SSD, NCC, or ZNCC metric will be calculated to find the best matching window
        and its disparity. This approach introduced flexibility in the window sizes and may lead to better performance.
        Finally, grid search is used to find the best parameter of window size and search range as well.</p>
      <h3 class="text-2xl font-bold pt-4">E. Evaluation Metrics</h3>
      <p>To evaluate the performance of different approaches, root mean squared error (RMS), the fraction of good
        matching pixels within a given error range, and computation time are used. RMS is computed between the disparity
        map computed dC(x, y) and the ground truth dT(x, y), i.e.</p>
      <katex-element
        expression="R={(\frac{1}{N}\sum_{(x,y)}{\left|d_C\left(x,y\right)-\ d_T\left(x,y\right)\right|^2)}}^\frac{1}{2}"/>
      <p>Where N is the total number of pixels where the ground truth image has a value. For fraction of good matching
        pixels, the range of errors is 4, 2, 1, 0.5 and 0.25 pixels between the disparity map computed and the ground
        truth image. The computation time is compared in seconds.</p>
      <h2 class="text-3xl font-bold pt-4">Experiments and Evaluation</h2>
      <p>During the experiment of this task, the SSD algorithm has been chosen as the baseline and other different
        algorithms of stereo matching have been used and compared. Additionally, to optimize the performance of the
        results, we also consider 5 aspects: the size of the window in the algorithm, the impact of different pixels,
        the sub-pixel accuracy, the smooth output and the acceleration. We do these five optimizations separately on the
        basic SSD algorithm and compare their results to see if they were valid. As for the comparison method, we use
        the average evaluation indicators (the RMS error, the fractions and the runtime) for the whole data set.</p>
      <h3 class="text-2xl font-bold pt-4">A. SSD vs. NCC vs. ZNCC</h3>
      <p>Firstly, we separately use SSD, NCC and ZNCC algorithms, which the paper explains previously. If the window
        size is set as 31, the result will be:</p>
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
          <tr>
            <td rowspan="2">
              <p>Method</p>
            </td>
            <td colspan="3">
              <p>Different Metrics</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>RMS</p>
            </td>
            <td>
              <p>Fraction</p>
            </td>
            <td>
              <p>Time (25 images)</p>
            </td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <p>SSD</p>
            </td>
            <td>
              <p>16.12</p>
            </td>
            <td>
              <p>[69.49, 53.76, 38.24, 23.33, 12.08]</p>
            </td>
            <td>
              <p>8.74s</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>NCC</p>
            </td>
            <td>
              <p>8.84</p>
            </td>
            <td>
              <p>[83.75, 62.83, 43.11, 25.86, 13.35]</p>
            </td>
            <td>
              <p>12.8s</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>ZNCC</p>
            </td>
            <td>
              <p>8.08</p>
            </td>
            <td>
              <p>[83.59, 62.05, 42.61, 25.61, 13.24]</p>
            </td>
            <td>
              <p>18.1s</p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>

      <p>Obviously, SSD has the worst performance and the ZNCC get the best performance. It meets our expectations,
        since theoretically, the NCC, which uses more complex formulas to reduce the linear variation in the brightness,
        will perform better than SSD. Additionally, since ZNCC is immune to intensity distortions, it will get more
        accurate results [6]. However, due to the more complex formula, the runtime of ZNCC is the longest. Overall, the
        RMS error still can be lower, since all these three algorithms are local matching algorithms, which may lose the
        information of the surrounding pixels.</p>
      <h3 class="text-2xl font-bold pt-4">B. Window Size </h3>
      <p>Considering different window sizes will influence the result, firstly, we use the grid search to find the best
        size. The size is set between 10 and 40, and part of the results are:</p>
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
          <tr>
            <td rowspan="2">
              <p>Metric</p>
            </td>
            <td colspan="6">
              <p>Different disparity range</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>25</p>
            </td>
            <td>
              <p>27</p>
            </td>
            <td>
              <p>29</p>
            </td>
            <td>
              <p>31</p>
            </td>
            <td>
              <p>33</p>
            </td>
            <td>
              <p>35</p>
            </td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <p>RMS</p>
            </td>
            <td>
              <p>16.51</p>
            </td>
            <td>
              <p>16.35</p>
            </td>
            <td>
              <p>16.20</p>
            </td>
            <td>
              <p>16.07</p>
            </td>
            <td>
              <p>15.94</p>
            </td>
            <td>
              <p>15.80</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Fraction</p>
            </td>
            <td>
              <p>[69.84, 56.62, 40.88, 25.21, 13.13]</p>
            </td>
            <td>
              <p>[69.98, 55.70, 39.99, 24.58, 12.77]</p>
            </td>
            <td>
              <p>[69.85, 54.74, 39.11, 24.00, 12.44]</p>
            </td>
            <td>
              <p>[69.53, 53.74, 38.23, 23.33, 12.07]</p>
            </td>
            <td>
              <p>[69.02, 52.77, 37.36, 22.72, 11.75]</p>
            </td>
            <td>
              <p>[68.37, 51.81, 36.53, 22.14, 11.42]</p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <p>Combining the result of RMS and Fraction, we set 31 as the window size. Furthermore, considering that pixels in
        different parts of the image may be affected differently by surrounding pixels, we also try to use the dynamic
        window size, the result is:</p>
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
          <tr>
            <td colspan="2" rowspan="2">
              <p>Method</p>
            </td>
            <td colspan="3">
              <p>Different metrics</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>RMS</p>
            </td>
            <td>
              <p>Fraction</p>
            </td>
            <td>
              <p>Time (25)</p>
            </td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td rowspan="2">
              <p>SSD</p>
            </td>
            <td>
              <p>Fixed</p>
            </td>
            <td>
              <p>16.12</p>
            </td>
            <td>
              <p>[69.49, 53.76, 38.24, 23.33, 12.08]</p>
            </td>
            <td>
              <p>8.74s</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Dynamic</p>
            </td>
            <td>
              <p>15.74</p>
            </td>
            <td>
              <p>[69.35, 53.70, 38.32,23.39, 12.09]</p>
            </td>
            <td>
              <p>83s</p>
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              <p>NCC</p>
            </td>
            <td>
              <p>Fixed</p>
            </td>
            <td>
              <p>8.84</p>
            </td>
            <td>
              <p>[83.75, 62.83, 43.11, 25.86, 13.35]</p>
            </td>
            <td>
              <p>12.8s</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Dynamic</p>
            </td>
            <td>
              <p>8.47</p>
            </td>
            <td>
              <p>[83.85, 64.00, 43.34, 26.74, 13.80]</p>
            </td>
            <td>
              <p>137s</p>
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              <p>ZNCC</p>
            </td>
            <td>
              <p>Fixed</p>
            </td>
            <td>
              <p>8.08</p>
            </td>
            <td>
              <p>[83.59, 62.05, 42.61, 25.61, 13.24]</p>
            </td>
            <td>
              <p>18.1s</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Dynamic</p>
            </td>
            <td>
              <p>7.72</p>
            </td>
            <td>
              <p>[85.51, 65.23, 45.20, 27.30, 14.11]</p>
            </td>
            <td>
              <p>192s</p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <p>Here are the disparity maps we got from different methods and the ground truth depth image given in the
        dataset:</p>
      <img src="../../assets/projects/stereo-disparity/comparison-of-fixed-window.png" alt="comparison-of-fixed-window">
      <span>Fig. 1.	Comparison of fixed window</span>
      <img src="../../assets/projects/stereo-disparity/comparison-of-dynamic-window.png"
           alt="comparison-of-dynamic-window">
      <span>Fig. 2.	Comparison of dynamic window</span>
      <p>The method of dynamic window size performs better, which corroborates our thoughts, while the drawback of this
        method is that it costs more time.</p>
      <h3 class="text-2xl font-bold pt-4">C. Gaussian and Sharpen </h3>
      <p>To explore the impact of different pixels, at first, we assume the centre of the window has a more important
        effect, so we add Gaussian blur to the window. Moreover, since the value is calculated by the brightness of the
        grey image, we think that sharpening the image to enhance grey-scale jumping may be useful. The result can be
        seen below:</p>
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
          <tr>
            <td colspan="2" rowspan="2">
              <p>Method</p>
            </td>
            <td colspan="2">
              <p>Different metrics</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>RMS</p>
            </td>
            <td>
              <p>Fraction</p>
            </td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td rowspan="3">
              <p>SSD</p>
            </td>
            <td>
              <p>Base</p>
            </td>
            <td>
              <p>16.12</p>
            </td>
            <td>
              <p>[69.49, 53.76, 38.24, 23.33, 12.08]</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Gaussian</p>
            </td>
            <td>
              <p>17.4</p>
            </td>
            <td>
              <p>[64.15, 57.22, 44.27, 27.99, 14.72]</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Sharpen</p>
            </td>
            <td>
              <p>15.58</p>
            </td>
            <td>
              <p>[67.65, 50.49, 36.48, 23.11, 12.12]</p>
            </td>
          </tr>
          <tr>
            <td rowspan="3">
              <p>NCC</p>
            </td>
            <td>
              <p>Base</p>
            </td>
            <td>
              <p>8.84</p>
            </td>
            <td>
              <p>[83.75, 62.83, 43.11, 25.86, 13.35]</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Gaussian</p>
            </td>
            <td>
              <p>12.41</p>
            </td>
            <td>
              <p>[77.17, 68.44, 51.89, 32.63, 17.19]</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Sharpen</p>
            </td>
            <td>
              <p>15.1</p>
            </td>
            <td>
              <p>[68.21, 50.69, 36.58, 23.16, 12.14]</p>
            </td>
          </tr>
          <tr>
            <td rowspan="3">
              <p>ZNCC</p>
            </td>
            <td>
              <p>Base</p>
            </td>
            <td>
              <p>8.08</p>
            </td>
            <td>
              <p>[83.59, 62.05, 42.61, 25.61, 13.24]</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Gaussian</p>
            </td>
            <td>
              <p>12.41</p>
            </td>
            <td>
              <p>[77.16, 68.43, 51.88, 32.62, 17.19]</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Sharpen</p>
            </td>
            <td>
              <p>10.54</p>
            </td>
            <td>
              <p>[74.97, 54.53, 38.66, 24.26, 12.7]</p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <p>It can be seen that both of these two methods fail to improve the performance on both RMS and Fractions, which
        means the centre pixel may have more complicated relations to its neighbours, such as the colour difference or
        the shading relationships.</p>
      <h3 class="text-2xl font-bold pt-4">D. Sub-pixel Accuracy </h3>
      <p>Since we found the disparity in the ground truth is not integers, if we do not do any processing, the disparity
        we get from stereo matching algorithms can only be an integer, which will lose accuracy. We try to enlarge the
        image, then calculate the disparity and scale the disparity map back to the image's original size. Lastly, we
        divide the disparity by the zoom ratio, so that the sub-pixel can be gotten. Here are the results:</p>
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
          <tr>
            <td colspan="2" rowspan="2">
              <p>Method</p>
            </td>
            <td colspan="2">
              <p>Different metrics</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>RMS</p>
            </td>
            <td>
              <p>Fraction</p>
            </td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td rowspan="2">
              <p>SSD</p>
            </td>
            <td>
              <p>Base</p>
            </td>
            <td>
              <p>16.12</p>
            </td>
            <td>
              <p>[69.49, 53.76, 38.24, 23.33, 12.08]</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Resize</p>
            </td>
            <td>
              <p>17.27</p>
            </td>
            <td>
              <p>[65.87, 57.97, 44.53, 29.54, 16.64]</p>
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              <p>NCC</p>
            </td>
            <td>
              <p>Base</p>
            </td>
            <td>
              <p>8.84</p>
            </td>
            <td>
              <p>[83.75, 62.83, 43.11, 25.86, 13.35]</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Resize</p>
            </td>
            <td>
              <p>11.28</p>
            </td>
            <td>
              <p>[79.95, 69.48, 51.62, 33.67, 19.00]</p>
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              <p>ZNCC</p>
            </td>
            <td>
              <p>Base</p>
            </td>
            <td>
              <p>8.08</p>
            </td>
            <td>
              <p>[83.59, 62.05, 42.61, 25.61, 13.24]</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Resize</p>
            </td>
            <td>
              <p>10.93</p>
            </td>
            <td>
              <p>[81.12, 70.06, 51.89, 33.86, 19.06]</p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <p>Although the RMS get worse, the fractions of pixels with errors less than 2, 1, 0.5 and 0.25 pixels are all
        improved, which means the accuracy is improved. However, the number of pixels with errors less than 4 gets
        larger, so there will be other better and more reasonable ways to get the sub-pixel.</p>
      <h3 class="text-2xl font-bold pt-4">E. Smooth</h3>
      <p>Inspired by the formula:</p>
      <katex-element expression="E\left(D\right)=\ \sum_{i}\left(W_1\left(i\right)-W_2\left(i+D\left(i\right)\right)\right)^2
+\ \lambda\sum_{i,j}{\rho(D\left(i\right)-D(j))}"/>
      <p>We implement it with a simple method: Calculate the disparity map first based on the SSD algorithm, and then
        use this formula to smooth the result. Since this method requires two complete operations, to save the runtime,
        we design the kernel for it. Lastly, we use grid search to set the value of λ.</p>
      <p>From TABLE IV, we can know that there is indeed an improvement, but it is very insignificant. This is due to
        the method we use being a simplified version, which has a fixed disparity map.</p>
      <p>Specifically, when calculating the smooth, we consider all 8 pixels surrounding the centre pixel. In the design
        of the kernel algorithm for SSD, we use convolution operations to calculate the whole image’s values of SSD for
        each disparity and set the max disparity value for looping. In other words, the result is a three-dimensional
        matrix: the x and y dimension is the horizontal and vertical coordinates of the image; the z dimension is the
        range of values for the disparity. Thus, to capture the disparity map is to find the minimum z for each of the
        coordinates. Continuing this thought, we have to add the smooth cost for each value. Since we consider the
        differences in a disparity between the centre and the 8 neighbours, a 3x3 kernel filled with 1 except for 0 in
        the centre can be designed. Then, we can use this kernel to convolve with the disparity map obtained from the
        first calculation to get a smooth disparity map (SDP). Then the following equation can be used to calculate the
        smooth cost for each disparity:</p>
      <katex-element expression="Smooth=\left|8\ast S S D_{diparity\ map}-\ \ SDP\right|\ast cost"/>
      <p>Lastly, we use the same method as the kernel method: to find the minimum z for each of the coordinates.</p>
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
          <tr>
            <td colspan="2" rowspan="2">
              <p>Method</p>
            </td>
            <td colspan="2">
              <p>Different metrics</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>RMS</p>
            </td>
            <td>
              <p>Fraction</p>
            </td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td rowspan="2">
              <p>SSD</p>
            </td>
            <td>
              <p>Base</p>
            </td>
            <td>
              <p>16.12</p>
            </td>
            <td>
              <p>[69.49, 53.76, 38.24, 23.33, 12.08]</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Smooth</p>
            </td>
            <td>
              <p>15.97</p>
            </td>
            <td>
              <p>[69.49, 53.82, 38.28, 23.35, 12.08]</p>
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              <p>NCC</p>
            </td>
            <td>
              <p>Base</p>
            </td>
            <td>
              <p>8.84</p>
            </td>
            <td>
              <p>[83.75, 62.83, 43.11, 25.86, 13.35]</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Smooth</p>
            </td>
            <td>
              <p>7.63</p>
            </td>
            <td>
              <p>[84.05, 62.59, 42.74, 25.62, 13.23]</p>
            </td>
          </tr>
          <tr>
            <td rowspan="2">
              <p>ZN</p>
              <p>CC</p>
            </td>
            <td>
              <p>Base</p>
            </td>
            <td>
              <p>8.08</p>
            </td>
            <td>
              <p>[83.59, 62.05, 42.61, 25.61, 13.24]</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Smooth</p>
            </td>
            <td>
              <p>7.63</p>
            </td>
            <td>
              <p>[83.59, 62.05, 42.61, 25.61, 13.24]</p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <p>From TABLE IV, we can know that there is indeed an improvement, but it is not significant enough. This is due
        to the method we use being a simplified version, which has a fixed disparity map. If we truly implement this
        formula, the result will be better.</p>
      <h3 class="text-2xl font-bold pt-4">F. Acceleration</h3>
      <p>Due to the principle of stereo matching: for a point in the real world, the position that appears on the left
        image must be to the left of the position on the right image, we could set the left range in the right image
        based on the coordinates of one pixel on the left, then the matching pixel can be found in this range. By
        narrowing the range of matches, we believe it can be improved in both accuracy and time. We use grid search to
        find the result:</p>
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
          <tr>
            <td rowspan="2">
              <p>Metric</p>
            </td>
            <td colspan="6">
              <p>Different disparity range</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>40</p>
            </td>
            <td>
              <p>50</p>
            </td>
            <td>
              <p>60</p>
            </td>
            <td>
              <p>70</p>
            </td>
            <td>
              <p>80</p>
            </td>
            <td>
              <p>90</p>
            </td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <p>RMS</p>
            </td>
            <td>
              <p>20.12</p>
            </td>
            <td>
              <p>18.31</p>
            </td>
            <td>
              <p>17.19</p>
            </td>
            <td>
              <p>16.83</p>
            </td>
            <td>
              <p>16.92</p>
            </td>
            <td>
              <p>17.04</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>Fraction</p>
            </td>
            <td>
              <p>[58.35, 49.50, 37.50, 23.71, 12.47]</p>
            </td>
            <td>
              <p>[63.78, 53.74, 39.93, 25.01, 13.11]</p>
            </td>
            <td>
              <p>[67.66, 56.78, 41.78, 26.01, 13.61]</p>
            </td>
            <td>
              <p>[68.86, 58.03, 42.56, 26.41, 13.81]</p>
            </td>
            <td>
              <p>[68.74, 57.98, 42.55, 26.41, 13.81]</p>
            </td>
            <td>
              <p>[68.71, 57.96, 42.54, 26.40, 13.80]</p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <p>It can be seen that the range of 70 could be the best choice.</p>
      <p>Moreover, we also design the kernel which the paper has discussed before to accelerate the process. Here is the
        result:</p>
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
          <tr>
            <td rowspan="2">
              <p>Metric</p>
            </td>
            <td colspan="6">
              <p>Different Methods</p>
            </td>
          </tr>
          <tr>
            <td>
              <p>SSD</p>
            </td>
            <td>
              <p>SDD</p>
              <p>kernel</p>
            </td>
            <td>
              <p>SDD SepFillter</p>
            </td>
            <td>
              <p>NCC</p>
            </td>
            <td>
              <p>NCC</p>
              <p>Kennel</p>
            </td>
            <td>
              <p>NCC SepFillter</p>
            </td>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <p>Time</p>
              <p>(1 img)</p>
            </td>
            <td>
              <p>&nbsp;95s</p>
            </td>
            <td>
              <p>665ms</p>
            </td>
            <td>
              <p>357ms</p>
            </td>
            <td>
              <p>182s</p>
            </td>
            <td>
              <p>1.52s</p>
            </td>
            <td>
              <p>567ms</p>
            </td>
          </tr>
          </tbody>
        </table>
      </div>
      <p>A significant reduction in time can be seen. This is because by using convolutional operations, two layers of
        loops can be reduced, thus greatly improving the efficiency of operations.</p>
      <h2 class="text-3xl font-bold pt-4">Conclusion and Future Improvements</h2>
      <p>This report started by introducing the concept of stereo matching and its importance and use of it. It then
        introduced the main design of this report and the dataset used for the experimentation. In the next section,
        this report went over the detail of stereo disparity and common approaches used to solve it in computer vision,
        such as local and global approaches. It then described the methods used in this study, including metrics like
        SSD, NCC, and ZNCC, different design choices as well as evaluating approaches. It is followed by a detailed
        discussion of the experiments conducted, such as adjustments of window size, different pre-processing methods,
        and smoothing techniques. The differences in performance with possible reasons are then analysed.</p>
      <p>To conclude, ZNCC has the best performance in both RMS and fraction of good matching pixels than SSD and NCC.
        Flexible window size also leads to a better performance than fixed window sizes, even if the window size is
        chosen from good-performing grid search results. As for the pre-processing methods, it seems like both Gaussian
        blur and sharpening would not contribute to a better result in this study’s scenario, no matter whether the
        filter is applied to the whole image or on the matching windows. However, the simplified smoothing technique
        does lead to a slight improvement in performance. Lastly, it is also observed that kernel operation is much
        faster than the basic for loop traverse implementation of the same algorithm, kernel computation can be more
        than 200 times faster than the traverse version.</p>
      <p>For future directions, it is recommended that global approaches like graph cuts are more worthwhile to
        implement than local approaches, due to their better consideration of the neighbour information and can produce
        a smoother output. Moreover, sub-pixel accuracy can be applied in are more appropriate way. Apart from these
        traditional ways, machine learning aided methods such as supervised depth classification are also worth
        exploring.</p>
      <h2 class="text-3xl font-bold pt-4">References</h2>
      <p>[1] M. Jang, H. Yoon, S. Lee, J. Kang, and S. Lee, ‘A Comparison and Evaluation of Stereo Matching on Active
        Stereo Images’, Sensors, vol. 22, no. 9, p. 3332, Apr. 2022, doi: 10.3390/s22093332.
      </p>
      <p>[2] N. Qian, ‘Binocular Disparity and the Perception of Depth’, Neuron, vol. 18, no. 3, pp. 359–368, Mar. 1997,
        doi: 10.1016/S0896-6273(00)81238-6.
      </p>
      <p>[3] K. Prazdny, ‘Detection of Binocular Disparities’, in Readings in Computer Vision, Elsevier, 1987, pp.
        73–79. doi: 10.1016/B978-0-08-051581-6.50014-3.
      </p>
      <p>[4] D. Scharstein and R. Szeliski, ‘Stereo Matching with Nonlinear Diffusion’, Int. J. Comput. Vis., vol. 28,
        no. 2, pp. 155–174, Jun. 1998, doi: 10.1023/A:1008015117424.
      </p>
      <p>[5] Y. Boykov, O. Veksler, and R. Zabih, ‘Fast approximate energy minimization via graph cuts’, IEEE Trans.
        Pattern Anal. Mach. Intell., vol. 23, no. 11, pp. 1222–1239, Nov. 2001, doi: 10.1109/34.969114.
      </p>
      <p>[6] S. Patil, J. S. Nadar, J. Gada, S. Motghare, and S. S. Nair, ‘Comparison of Various Stereo Vision Cost
        Aggregation Methods’, vol. 2, no. 8, p. 5, 2013.</p>
      <h2 class="text-3xl font-bold pt-4">Authors</h2>
      <p>This is a team project proudly produced by Minghua Zhang and Zhi Zeng at the University
        of Melbourne in October 2022.</p>

    </div>
  </base-hero>
</template>

<script setup>
import BaseHero from "@/components/BaseHero.vue";
</script>
