<template>
  <main class="px-4 py-16 sm:px-6 lg:px-8 sm:py-32">
    <div class="mx-auto max-w-7xl">
      <h1
        class="mb-10 text-5xl font-medium sm:text-6xl md:text-7xl lg:text-8xl sm:mb-16"
      >
        About Me
      </h1>
      <p
        class="max-w-5xl mb-16 text-3xl leading-tight sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight sm:mb-24"
      >
        I’m a digital marketer with a software engineering background, based in
        Melbourne.
      </p>

      <dl
        class="grid gap-x-12 gap-y-3 text-xl md:text-2xl md:grid-cols-[12rem_1fr]"
      >
        <dt class="font-light text-gray-400">What I do</dt>
        <dd class="grid max-w-3xl gap-4 mb-12 leading-snug">
          <p>
            I work in Myer’s in-house digital marketing team, running paid
            social and programmatic campaigns from set-up through optimisation
            to post-campaign reporting.
          </p>
          <p>
            Day to day that means Meta, TikTok, YouTube, Pinterest and
            DV360/CM360, including display, BVOD, SVOD and audio bought through
            programmatic guaranteed and PMP deals.
          </p>
          <p>
            The work covers Myer’s own marketing and retail media: campaigns for
            brand partners through Myer Media Network, using Myer first-party
            audiences.
          </p>
          <p>
            I also like removing manual work with code. I built a browser tool
            that turns a Meta Ads export into finished report tables, and it won
            second prize in Myer’s AI Use Case Competition.
          </p>
          <div class="flex items-center gap-1 text-blue-500">
            <router-link
              to="/portfolio/projects/pcr-formatter"
              class="link link-hover"
              >Read the case study</router-link
            >
            <span>→</span>
          </div>
        </dd>

        <dt class="font-light text-gray-400">Background</dt>
        <dd class="grid max-w-3xl gap-4 mb-12 leading-snug">
          <p>
            Before Myer I worked in smaller marketing teams across Google Ads,
            Meta Ads, SEO and analytics, where I set up tracking and reporting
            from scratch.
          </p>
          <p>
            Before that I was a software engineering intern, building data
            dashboards in Python and JavaScript.
          </p>
        </dd>

        <dt class="font-light text-gray-400">Education</dt>
        <dd class="grid max-w-3xl gap-4 mb-12 leading-snug">
          <p>Master of Information Technology, University of Melbourne</p>
          <p>MSc Marketing (Distinction), Durham University</p>
        </dd>

        <dt class="font-light text-gray-400">Tools</dt>
        <dd class="grid max-w-3xl gap-4 mb-12 leading-snug">
          <p>
            <span class="font-medium">Paid media.</span>
            DV360, CM360, Meta Ads Manager, TikTok Ads Manager, Pinterest Ads,
            YouTube, Google Ads
          </p>
          <p>
            <span class="font-medium">Analytics and tracking.</span>
            GA4, Google Tag Manager, Excel
          </p>
          <p>
            <span class="font-medium">Code.</span>
            JavaScript, Python, SQL, HTML and CSS, Vue
          </p>
        </dd>

        <dt class="font-light text-gray-400">This site</dt>
        <dd class="grid max-w-3xl gap-4 leading-snug">
          <p>Built with Vue and Tailwind CSS.</p>
          <div class="flex items-center gap-1 text-blue-500">
            <a
              class="link link-hover"
              href="https://github.com/ZaynTseng/portfolio"
              target="_blank"
              rel="noopener"
              >See the code on GitHub</a
            >
            <span>↗</span>
          </div>
        </dd>
      </dl>

      <div
        class="flex items-center gap-1 mt-16 text-2xl text-blue-500 sm:text-3xl md:text-4xl sm:mt-24"
      >
        <router-link to="/portfolio/contact" class="link link-hover"
          >Get in touch</router-link
        >
        <span>→</span>
      </div>
    </div>
  </main>
</template>
