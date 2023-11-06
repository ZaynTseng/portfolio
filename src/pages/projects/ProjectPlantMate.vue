<template>
  <base-hero v-if="isLoading">
    <base-spinner></base-spinner>
  </base-hero>
  <base-hero class="animate__animated animate__fadeIn">
    <div class="max-w-3xl gap-2 grid">
      <figure>
        <img src="../../assets/projects/plant-mate/plant-mate-cover.png" alt="cover"
             class="border-base-content bg-base-300 rounded-box border border-opacity-5"
             @load="resourceLoaded">
      </figure>
      <h1 class="text-5xl font-bold pt-4">Plant Mate</h1>
      <p class="text-2xl">A digital twin app crafted for novice urban farmers</p>
      <div class="gap-2 flex pb-6">
        <span class="badge badge-secondary badge-info">UI/UX</span>
        <span class="badge badge-secondary badge-success">iOS</span>
        <span class="badge badge-ghost">November 2022</span>
      </div>
      <h2 class="text-3xl font-bold pt-4">Challenge</h2>
      <p>This UX research project, in partnership with Telstra, focuses on exploring how digital twins can benefit the
        agriculture industry. Over 12 weeks, my task is to design high-fidelity prototypes with input from agriculture
        practitioners. After narrowing down the focus to urban farming, I plan to design a digital twins app for home
        plant growers.</p>

      <h2 class="text-3xl font-bold pt-4">Research</h2>
      <p>Initially, the research was aimed to understand digital twins, agriculture practices, challenges, and
        enabling
        technologies in the Australian market. However, time and budget constraints made it difficult to focus on
        large-scale farming and conduct further research. Instead, the research turned to individual farming
        practices,
        such as urban and home farming, which provided a more feasible way to engage with participants and can still
        support the farming industry.</p>

      <h3 class="text-2xl font-bold pt-4">Secondary Research Findings</h3>
      <ul class="gap-2 grid list-disc ml-6">
        <li>Digital twins can be categorised into 4 types: component twin, asset twin, system twin, and process twin.
          The
          level of complexity rises from component twin to process twin.
        </li>
        <li>The Australian agriculture industry is highly fragmented and mainly dependent on domestic markets. In
          2021,
          the costs increased by 13.8%, but profitability also increased and reached 31.6%. It has the most land used
          in
          organic farming in the world.
        </li>
        <li>The Australian agriculture industry is facing water shortage issues, especially around the Murray-Darling
          Basin. Floods, droughts and bushfires are also intense and common.
        </li>
      </ul>

      <h3 class="text-2xl font-bold pt-4">Limitations of Current Products</h3>
      <p>If we focus on the physical products that provide aid to home farming practices, you will find devices like
        the
        Flower Care smart monitor. But they have a few limitations:</p>
      <ul class="gap-2 grid list-disc ml-6">
        <li>One device can only monitor one pot at a time, which requires a large investment to monitor multiple
          plants at a time.
        </li>
        <li>Lack of image recognition ability, all suggestions are based on deductions from the sensors (fertility,
          humidity, temperature, and light intensity) that might be inaccurate.
        </li>
        <li>No combination of real-time camera and environment sensors.
        </li>
        <li>Cannot detect sunlight, shade, pest, or plant density, and monitor a plant’s growth and yields.</li>
      </ul>
      <img src="../../assets/projects/plant-mate/current-product.png" alt="current-product">

      <h3 class="text-2xl font-bold pt-4">Primary Research</h3>
      <p>Two data collection methods were used for primary research: semi-structured interviews and netnography.
        Interviews provided qualitative data from people with urban farming experience, while netnography was used to
        supplement by gathering common issues and difficulties shared on social media. These methods helped uncover
        common needs and issues in urban farming.</p>

      <h3 class="text-2xl font-bold pt-4">Goals</h3>
      <ul class="gap-2 grid list-disc ml-6">
        <li>To understand common challenges that people meet when growing plants on their own.</li>
        <li>To investigate potential features that can satisfy user needs.</li>
        <li>To know more about people’s experience in urban farming.</li>
      </ul>

      <h3 class="text-2xl font-bold pt-4">Methods</h3>
      <ul class="gap-2 grid list-disc ml-6">
        <li>Semi-structured interview (5 participants, 3 online, 2 offline)</li>
        <li>Netnography (50 articles)</li>
      </ul>

      <h3 class="text-2xl font-bold pt-4">Affinity Diagram</h3>
      <p>Most of the responses are related to factors contributing to failure in growing plants, e.g., watering issues
        and lack of farming knowledge. These failures contribute to people giving up growing plants themselves and did
        not have a pleasant experience.
      </p>
      <img src="../../assets/projects/plant-mate/affinity.png" alt="affinity diagram">

      <h2 class="text-3xl font-bold pt-4">Insights</h2>

      <h3 class="text-2xl font-bold pt-4">1. Wide Selection of Vegetables</h3>
      <ul class="gap-2 grid list-disc ml-6">
        <li>People grow a large variety of plants at home for different purposes.</li>
        <li>Spring onion, garlic shoot, ginger, leek, coriander, lettuce, chilli pepper, cherry tomatoes, pak choi,
          cucumber, pea seedlings, strawberry, celery, basil, thyme, rosemary, parsley, mint.
        </li>
      </ul>

      <h3 class="text-2xl font-bold pt-4">2. People Forget</h3>
      <ul class="gap-2 grid list-disc ml-6">
        <li>People often forget about watering and taking care of their vegetables (e.g., moving plants into the shade
          when the sun is too strong).
        </li>
        <li>This leads to a large group of failures.</li>
      </ul>

      <h3 class="text-2xl font-bold pt-4">3. Watering Issues</h3>
      <ul class="gap-2 grid list-disc ml-6">
        <li> Wrong watering timing, e.g., in the afternoon.</li>
        <li>Watering too much.</li>
        <li>Forget watering during extremely hot weather (the temperature is too high).</li>
      </ul>

      <h3 class="text-2xl font-bold pt-4">4. Lack of Farming Knowledge</h3>
      <ul class="gap-2 grid list-disc ml-6">
        <li>Unsure about the proper growing condition of that plant (e.g., temperature, sunlight), so they stopped
          growing
          / growing slowly / not as expected.
        </li>
        <li>Not sure about how to deal with pest and nutrition related diseases.</li>
        <li>Too many plants in one bowl, so they all cannot grow well.</li>
      </ul>

      <h3 class="text-2xl font-bold pt-4">5. Transplanting Issues</h3>
      <ul class="gap-2 grid list-disc ml-6">
        <li>Wrong timing (e.g., should choose a cloudy day or at night).</li>
        <li>Wrong choice of container.</li>
        <li>Not sure about the depth and type of soil in the plant’s growing cycle.</li>
      </ul>

      <h2 class="text-3xl font-bold pt-4">Problem Statement</h2>
      <img src="../../assets/projects/plant-mate/statement.png" alt="problem statement">

      <h2 class="text-3xl font-bold pt-4">Mood Board</h2>
      <img src="../../assets/projects/plant-mate/moodboard.jpg" alt="moodboard">

      <h2 class="text-3xl font-bold pt-4">Wireframe</h2>
      <img src="../../assets/projects/plant-mate/wireframe.png" alt="wireframe">

      <h3 class="text-2xl font-bold pt-4">Ideation</h3>
      <p>
        Since the problem statement is situated around creating an digital twin app, and the findings are
        comparatively
        simple as they are around common failures in growing plants, the ideation process mainly involves how to solve
        them through functions in an app and where to house each function.
      </p>

      <p> Main guiding thoughts for the app design:</p>
      <ul class="gap-2 grid list-disc ml-6">
        <li>Effective and efficient to use.</li>
        <li>Minimise possible errors.</li>
        <li>Help people growing plants with ease.</li>
        <li>Easy to learn and easy to use.</li>
        <li>Minimal and simplicity design.</li>
        <li>Follow the iOS <a class="link link-hover text-blue-500" target="_blank"
                              href="https://developer.apple.com/design/human-interface-guidelines/guidelines/overview/">Human
          Interface
          Guidelines. ↗</a></li>
      </ul>

      <h2 class="text-3xl font-bold pt-4">High-fidelity Prototype</h2>

      <h3 class="text-2xl font-bold pt-4">Onboarding – Everything Starts Here</h3>
      <img src="../../assets/projects/plant-mate/prototype-1.png" alt="prototype">
      <ul class="gap-2 grid list-disc ml-6">
        <li>Introduction of main features first time starting the app.</li>
        <li>Smart camera will be added at the set up time.</li>
        <li>Once the camera is connected, the app will recognise and analyse all plants in the view.</li>
      </ul>
      <p>The app is built on the assumption that there is a smart camera hardware with all essential sensors, and the
        app uses machine learning to power its analysis.</p>

      <h3 class="text-2xl font-bold pt-4">My Plants – All Necessary Information in One Place</h3>
      <img src="../../assets/projects/plant-mate/prototype-2.png" alt="prototype">
      <ul class="gap-2 grid list-disc ml-6">
        <li>Camera view, plant information updates, and collection of plants in one place.</li>
        <li>All information is automatically generated, no need for manual inputs.</li>
        <li>Camera view with details of temperate, humidity, sunlight, and weather information of that area. History
          information is also recorded.
        </li>
        <li>Plant information updates include water, ripe, fertilise, and pest notifications.</li>
      </ul>

      <h3 class="text-2xl font-bold pt-4">Insights – Where the Digital Twin Magic Happens</h3>
      <img src="../../assets/projects/plant-mate/prototype-3.png" alt="prototype">
      <ul class="gap-2 grid list-disc ml-6">
        <li>Insights in a timeline – historical insights, insights for today, and predicted upcoming insights.</li>
        <li>Insights in 5 categories: water, ripe, fertilise, pest, and tips for growing plants.</li>
        <li>Tap on one of the insights, all notifications of that plant will show together.</li>
        <li>Not sure which plant needs more water? The app will tell you.</li>
        <li>You can set alarms for actions as well.</li>
      </ul>

      <h3 class="text-2xl font-bold pt-4">Community for Sharing & Settings for Personalisation</h3>
      <img src="../../assets/projects/plant-mate/prototype-4.png" alt="prototype">
      <ul class="gap-2 grid list-disc ml-6">
        <li>There is a plant lover community for sharing experiences and getting feedbacks.</li>
        <li>Write you newest findings!</li>
        <li>You can customise how the app works.</li>
      </ul>

      <h3 class="text-2xl font-bold pt-4">Colour Palette & Typography</h3>
      <p>Plant Mate follows the iOS Human Interface Guidelines for its use of colour and typography.</p>
      <ul class="gap-2 grid list-disc ml-6">
        <li>Theme colour: green (#34C759)</li>
        <li>Font: SF Pro</li>
      </ul>
      <img src="../../assets/projects/plant-mate/colour.png" alt="colour palette">

      <a class="link link-hover text-blue-500" target="_blank"
         href="https://developer.apple.com/design/human-interface-guidelines/foundations/color/">Human Interface
        Guidelines:
        Colour ↗</a>

      <a class="link link-hover text-blue-500" target="_blank"
         href="https://developer.apple.com/design/human-interface-guidelines/foundations/typography/">Human Interface
        Guidelines:
        Typography ↗</a>

      <h2 class="text-3xl font-bold pt-4">Evaluation</h2>

      <h3 class="text-2xl font-bold pt-4">Cooperative Evaluation</h3>
      <p>
        Since the prototype is not a workable app that all elements are clickable, cooperative evaluation is adopted
        to
        allow the users test together with the designer. In this way, the users are guided when necessary and tested
        for
        all interactions.
      </p>

      <ul class="gap-2 grid list-disc ml-6">
        <li>Participants: 2</li>
        <li>Format: offline</li>
      </ul>

      <h3 class="text-2xl font-bold pt-4">Updates in My Plants Page</h3>
      <img src="../../assets/projects/plant-mate/compare-1.png" alt="compare">
      <ul class="gap-2 grid list-disc ml-6">
        <li>The large text top navigation is replaced with regular one, to save space for the main content.</li>
        <li>Plant information updates are moved from the Insights page to the My Plants page, resulting in improved
          efficiency. Important information can be seen at the time opening the app.
        </li>
        <li>Users can now edit the My Plant page layout directly, no need to go into the settings.</li>
      </ul>

      <h3 class="text-2xl font-bold pt-4">Updates in Insights Page</h3>
      <img src="../../assets/projects/plant-mate/compare-2.png" alt="compare">
      <ul class="gap-2 grid list-disc ml-6">
        <li>The large text top navigation is replaced with regular one, to save space for the main content.</li>
        <li>Plant information updates are moved from the Insights page to the My Plants page, resulting in improved
          efficiency. Now, more notifications can be displayed in one screen.
        </li>
        <li>Changed the colour style to improve readability, now the background is grey and the notifications are
          white.
        </li>
        <li>Added a timeline to the insights, now users can view insights in 3 categories. The information hierarchy
          is
          more clearer.
        </li>
      </ul>

      <h3 class="text-2xl font-bold pt-4">Updates in Notification Detail Page</h3>
      <img src="../../assets/projects/plant-mate/compare-3.png" alt="compare">
      <ul class="gap-2 grid list-disc ml-6">
        <li>Added a dynamic circle to indicate the very specific plant that needs action. The example above is
          pointing
          out which plant needs watering (view its animation in the interactive demo).
        </li>
        <li>This is also a digital twin enabled feature.</li>
        <li>Changed the the colour style to improve readability. Now all information cards are in white background and
          grey outline.
        </li>
      </ul>


      <h3 class="text-2xl font-bold pt-4">New Functionality – Time Lapse Photos</h3>
      <img src="../../assets/projects/plant-mate/compare-4.png" alt="compare">
      <ul class="gap-2 grid list-disc ml-6">
        <li>Taking advantage of the camera images, the app can now capture photos of each plant periodically and save
          them
          into an album.
        </li>
        <li>Users can now watch how their vegetables grow from a tiny seed to the day they ripe.</li>
      </ul>

      <h2 class="text-3xl font-bold pt-4">Interactive Prototype and Project Video</h2>
      <p><a class="link link-hover text-blue-500" target="_blank"
            href="https://www.figma.com/proto/1mv7Tm4cWvwqrhUxkkHNon/Plant-Mate-Project-File?page-id=0%3A1&node-id=1%3A137&viewport=164%2C46%2C0.16&scaling=scale-down&starting-point-node-id=1%3A137">
        Try the Interactive Demo in Figma ↗</a></p>

      <p><a class="link link-hover text-blue-500" target="_blank"
            href="https://www.youtube.com/watch?v=wbwp5E0z1dU">
        Watch the Project Video on YouTube ↗</a></p>
    </div>
  </base-hero>
</template>

<script setup>
import BaseHero from "@/components/BaseHero.vue";
import {ref} from "vue";
import BaseSpinner from "@/components/BaseSpinner.vue";

let isLoading = ref(true);

function resourceLoaded() {
  isLoading.value = false;
}
</script>
