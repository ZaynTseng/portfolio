<template>
  <base-hero v-if="isLoading">
    <base-spinner></base-spinner>
  </base-hero>
  <base-hero class="animate__animated animate__fadeIn">
    <div class="grid max-w-3xl gap-2">
      <figure>
        <img
          src="../../assets/projects/pcr-formatter/pcr-formatter-cover.webp"
          width="1600"
          height="900"
          alt="Meta Ads PCR Formatter showing formatted report tables"
          class="border border-base-content bg-base-300 rounded-box border-opacity-5"
          @load="resourceLoaded"
        />
      </figure>
      <h1 class="pt-4 text-5xl font-bold">Meta Ads PCR Formatter</h1>
      <p class="text-2xl">
        A browser tool that turns a Meta Ads export into finished report tables
      </p>
      <div class="flex flex-wrap gap-2 pb-6">
        <span class="badge badge-info">Automation</span>
        <span class="badge badge-neutral">JavaScript</span>
        <span class="badge badge-neutral">Paid Social</span>
        <span class="badge badge-ghost">June 2026</span>
      </div>

      <h2 class="pt-4 text-3xl font-bold">Overview</h2>
      <p>
        I work in a three-person paid social and programmatic team at Myer.
        Every campaign we run ends with a post-campaign report (PCR), and for
        Meta that report was built by hand: export the data from Ads Manager,
        clean the rows, reformat the numbers, then paste everything into the
        report deck.
      </p>
      <p>
        I built a single-page tool that does the cleaning and formatting. You
        import the export, click Copy, and paste three finished tables into the
        deck. A step that took 20–30 minutes per report now takes under two.
      </p>

      <div
        class="my-4 border stats stats-vertical sm:stats-horizontal bg-base-200 border-base-content border-opacity-5"
      >
        <div class="stat">
          <div class="stat-title">Time per report</div>
          <div class="text-3xl stat-value">Under 2 min</div>
          <div class="stat-desc">Down from 20–30 minutes</div>
        </div>
        <div class="stat">
          <div class="stat-title">Team volume</div>
          <div class="text-3xl stat-value">5–10</div>
          <div class="stat-desc">Reports a week</div>
        </div>
        <div class="stat">
          <div class="stat-title">Recognition</div>
          <div class="text-3xl stat-value">2nd prize</div>
          <div class="stat-desc">Myer AI Use Case Competition</div>
        </div>
      </div>

      <h2 class="pt-4 text-3xl font-bold">The Problem</h2>
      <p>
        A Meta export broken down by campaign, ad set and ad arrives as one flat
        sheet. Subtotal rows sit in between the ad rows, every name carries the
        full naming convention, and none of the numbers are formatted.
      </p>
      <img
        src="../../assets/projects/pcr-formatter/pcr-formatter-raw-export.webp"
        width="1600"
        height="665"
        loading="lazy"
        alt="A raw Meta Ads export opened as a spreadsheet"
        class="border border-base-content rounded-box border-opacity-5"
      />
      <p class="text-sm opacity-60">
        The export as it arrives. All campaign data on this page is made up.
      </p>
      <p>Turning that into a report meant the same seven steps every time:</p>
      <ol class="grid gap-2 ml-6 list-decimal">
        <li>Export the data from Ads Manager.</li>
        <li>Filter and clean the rows by hand.</li>
        <li>Delete the columns the report does not use.</li>
        <li>
          Reformat every number: thousands separators, decimal places,
          percentages.
        </li>
        <li>Copy the rows into the deck.</li>
        <li>Reformat the text: font, size, alignment, colour.</li>
        <li>Repeat for every campaign.</li>
      </ol>
      <p>
        With 5–10 reports a week, the time added up. It was also work that
        needed full attention, because every number in the report has to be
        right.
      </p>

      <h2 class="pt-4 text-3xl font-bold">The Tool</h2>
      <p>The new process has three steps:</p>
      <ol class="grid gap-2 ml-6 list-decimal">
        <li>Import the Excel export.</li>
        <li>Click Copy on a table.</li>
        <li>Paste it into the deck.</li>
      </ol>
      <p>
        The tool builds the three tables the report needs: overall results by
        campaign, results by audience, and results by creative.
      </p>
      <img
        src="../../assets/projects/pcr-formatter/pcr-formatter-ad-level.webp"
        width="1600"
        height="861"
        loading="lazy"
        alt="The formatted ad level table produced by the tool"
        class="border border-base-content rounded-box border-opacity-5"
      />
      <p class="text-sm opacity-60">
        The creative-level table built from the export above.
      </p>

      <h3 class="pt-4 text-2xl font-bold">What It Handles</h3>
      <ul class="grid gap-2 ml-6 list-disc">
        <li>
          Finds the header row and maps the columns, including the ones Meta
          labels differently between exports, such as a currency suffix on
          spend and CPM.
        </li>
        <li>
          Separates campaign, ad set and ad rows, which arrive mixed together in
          one sheet.
        </li>
        <li>
          Takes totals from Meta’s own summary row. Reach and frequency are
          de-duplicated, so adding up the rows would give the wrong answer.
        </li>
        <li>
          Strips the naming convention from campaign, audience and ad names, so
          the tables show only the part a reader needs.
        </li>
        <li>
          Reads the campaign objective from the campaign name and picks the
          matching set of metrics: awareness, conversion or traffic.
        </li>
        <li>
          Formats every number, and shows a missing rate as “n/a” instead of
          zero.
        </li>
        <li>
          Groups ads under their audience and sorts them, so the tables come out
          in the same order every time.
        </li>
        <li>
          Copies each table to the clipboard as a formatted table, so it pastes
          into slides already styled. A CSV download is there as a fallback.
        </li>
      </ul>

      <h2 class="pt-4 text-3xl font-bold">How It Was Built</h2>
      <h3 class="pt-4 text-2xl font-bold">Everything Runs in the Browser</h3>
      <p>
        The tool is one HTML file. The export is read locally with SheetJS and
        never leaves the computer. Campaign data is commercially sensitive, so
        this mattered: with no server and no upload, the data stays where it
        already was, and anyone in the team can use the tool by opening the
        file.
      </p>
      <ul class="grid gap-2 ml-6 list-disc">
        <li>Vanilla JavaScript for the parsing and table logic</li>
        <li>SheetJS to read the Excel export, PapaParse for the CSV output</li>
        <li>Tailwind CSS and daisyUI for the interface</li>
      </ul>

      <h3 class="pt-4 text-2xl font-bold">AI-Assisted Development</h3>
      <p>
        I built it with AI coding tools. I started in a chat interface,
        describing the problem and the rules in plain language: what each table
        needs, how names should be cleaned, what counts as an error. From there
        I moved to agent mode in VS Code to iterate, debug and add features,
        testing the output against real exports along the way.
      </p>

      <h3 class="pt-4 text-2xl font-bold">Edge Cases</h3>
      <p>
        Getting from a first version to something the team could rely on took
        time: edge cases, data flow and testing against real exports. Some of
        the cases the tool now handles:
      </p>
      <ul class="grid gap-2 ml-6 list-disc">
        <li>
          Numbers arriving as text with thousands separators, so that “1,234”
          was read as 1. The tool now strips separators before parsing.
        </li>
        <li>
          Loose column matching picking the wrong column when two had similar
          names, such as ad recall lift (people) and ad recall lift rate. It now
          looks for an exact match first.
        </li>
        <li>
          Exports saved without the summary row. The tool detects this and asks
          for a re-export with the summary row included.
        </li>
        <li>
          Exports with campaigns of different objectives in one file. The tool
          warns that they need to be imported separately.
        </li>
        <li>
          The same audience running in more than one campaign. The tool adds the
          campaign name to each audience so the rows can be told apart.
        </li>
        <li>
          Influencer boosting campaigns, which report video plays and CPM
          instead of ad recall. A toggle swaps the columns and checks that the
          export contains them.
        </li>
      </ul>

      <h2 class="pt-4 text-3xl font-bold">Results</h2>
      <ul class="grid gap-2 ml-6 list-disc">
        <li>
          Building the tables for a Meta report went from 20–30 minutes to under
          two.
        </li>
        <li>
          The team uses it for the Meta reports we produce, typically 5–10 a
          week.
        </li>
        <li>
          Ad hoc report requests get a faster turnaround, including in weeks
          when reports and campaign set-up deadlines land together.
        </li>
        <li>
          It won second prize in Myer’s AI Use Case Competition in 2026, and I
          presented it to the Chief Customer Officer.
        </li>
      </ul>

      <h2 class="pt-4 text-3xl font-bold">What’s Next</h2>
      <p>
        The tool only handles Meta. TikTok, Pinterest and YouTube exports each
        have a different structure and a different report layout, so each needs
        its own parser. That is the next stage.
      </p>

      <h2 class="pt-4 text-3xl font-bold">A Note on the Data</h2>
      <p>
        Every campaign, audience and number shown on this page is made up. The
        tool was built for internal use, so its source code is not public.
      </p>
    </div>
  </base-hero>
</template>

<script setup>
import { ref } from "vue";
import BaseHero from "@/components/BaseHero.vue";
import BaseSpinner from "@/components/BaseSpinner.vue";

let isLoading = ref(true);

function resourceLoaded() {
  isLoading.value = false;
}
</script>
