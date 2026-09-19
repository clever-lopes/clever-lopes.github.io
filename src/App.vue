<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { computed, onMounted, ref } from 'vue'
import { locale, restoreLocale, t, toggleLocale } from '@/i18n'

const isDark = useDark()
const toggleDark = useToggle(isDark)

// The page is prerendered at build time. Anything that depends on
// localStorage or the OS theme only settles after mount, so the first client
// render stays identical to the server one and hydration has nothing to fix.
const hydrated = ref(false)
onMounted(() => {
  restoreLocale()
  hydrated.value = true
})

const year = new Date().getFullYear()

const projects = computed(() => [
  {
    index: '01',
    kind: t.value.kinds.product,
    name: 'Caff CRM',
    blurb: t.value.projects.caff,
    stack: 'TypeScript · NestJS · React · Nx · PostgreSQL',
    href: 'https://caffcrm.com',
  },
  {
    index: '02',
    kind: t.value.kinds.team,
    name: 'Delivery Platform',
    blurb: t.value.projects.delivery,
    stack: 'React · Node.js · Express · Sequelize',
    href: 'https://github.com/clever-lopes/fullstack-delivery-app',
  },
  {
    index: '03',
    kind: t.value.kinds.team,
    name: 'Recipes App',
    blurb: t.value.projects.recipes,
    stack: 'React · JavaScript · Context API',
    href: 'https://github.com/clever-lopes/frontend-recipes-app',
  },
])

const stack = computed(() => [
  { group: t.value.groups.languages, items: 'TypeScript · JavaScript · Go' },
  { group: t.value.groups.backend, items: 'NestJS · Node.js · PostgreSQL · TypeORM' },
  { group: t.value.groups.frontend, items: 'React · Vue · Tailwind CSS' },
  { group: t.value.groups.tooling, items: 'Nx · Docker · GitHub Actions · Jest · Linux' },
])

const contacts = [
  { label: 'Email', value: 'tk_clever.junior@outlook.com', href: 'mailto:tk_clever.junior@outlook.com' },
  { label: 'LinkedIn', value: 'in/clever-lopes', href: 'https://www.linkedin.com/in/clever-lopes/' },
  { label: 'GitHub', value: 'clever-lopes', href: 'https://github.com/clever-lopes' },
]
</script>

<template>
  <div class="min-h-screen bg-paper font-sans text-ink dark:bg-ink dark:text-paper">
    <!-- header -->
    <header class="border-b border-rule dark:border-rule-dark">
      <div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5 lg:px-10">
        <span class="label font-medium">
          Clever <span class="text-brand dark:text-brand-soft">Lopes</span>
        </span>
        <div class="flex items-center gap-2">
          <button
            type="button"
            class="label border border-rule px-3 py-1.5 transition hover:border-brand hover:text-brand dark:border-rule-dark dark:hover:border-brand-soft dark:hover:text-brand-soft"
            :aria-label="hydrated && locale === 'pt' ? 'Switch to English' : 'Mudar para português'"
            @click="toggleLocale()"
          >
            {{ hydrated && locale === 'pt' ? 'EN' : 'PT' }}
          </button>
          <button
            type="button"
            aria-label="Toggle theme"
            class="label border border-rule px-3 py-1.5 transition hover:border-brand hover:text-brand dark:border-rule-dark dark:hover:border-brand-soft dark:hover:text-brand-soft"
            @click="toggleDark()"
          >
            {{ hydrated && isDark ? 'Light' : 'Dark' }}
          </button>
        </div>
      </div>
    </header>

    <!-- hero -->
    <section class="border-b border-rule dark:border-rule-dark">
      <div class="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-16 lg:px-10 lg:py-20">
        <div>
          <p class="label text-brand dark:text-brand-soft">
            {{ t.profile }} / {{ year }}
          </p>

          <h1 class="mt-6 text-[clamp(3rem,8vw,5.5rem)] font-extrabold leading-[0.95] tracking-[-0.035em]">
            Clever<br /><span class="text-brand dark:text-brand-soft">Lopes</span>
          </h1>

          <p class="mt-8 max-w-xl text-lg leading-relaxed opacity-80">
            {{ t.intro }}
          </p>

          <div class="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            <a
              v-for="contact in contacts"
              :key="contact.label"
              :href="contact.href"
              target="_blank"
              rel="noopener noreferrer"
              class="label link"
              >{{ contact.label }}</a
            >
          </div>
        </div>

        <div class="relative order-first aspect-square w-full max-w-[14rem] overflow-hidden rounded-2xl sm:max-w-[16rem] lg:order-none lg:max-w-none">
          <img
            src="@/assets/User.jpeg"
            alt="Clever Lopes, fullstack TypeScript engineer"
            width="800"
            height="800"
            class="h-full w-full object-cover"
          />
          <div class="label absolute inset-x-0 bottom-0 flex justify-between bg-ink/65 px-4 py-2.5 text-paper backdrop-blur-sm">
            <span>Clever Lopes</span>
            <span class="text-brand-soft">{{ t.photoCaption }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- about -->
    <section class="border-b border-rule dark:border-rule-dark">
      <div class="mx-auto grid max-w-6xl gap-x-12 gap-y-6 px-6 py-16 lg:grid-cols-[9rem_minmax(0,1fr)] lg:px-10 lg:py-20">
        <p class="label pt-1 text-brand dark:text-brand-soft">01 / {{ t.aboutLabel }}</p>
        <div>
          <h2 class="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
            {{ t.aboutTitle }}
          </h2>
          <div class="mt-8 grid max-w-4xl gap-8 leading-relaxed opacity-80 sm:grid-cols-2">
            <p>
              {{ t.aboutOne.split('Quantum Tech Ventures')[0]
              }}<a
                href="https://qtvholding.com"
                target="_blank"
                rel="noopener noreferrer"
                class="link font-medium opacity-100"
                >Quantum Tech Ventures</a
              >{{ t.aboutOne.split('Quantum Tech Ventures')[1] }}
            </p>
            <p>{{ t.aboutTwo }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- work -->
    <section class="border-b border-rule dark:border-rule-dark">
      <div class="mx-auto grid max-w-6xl gap-x-12 gap-y-6 px-6 py-16 lg:grid-cols-[9rem_minmax(0,1fr)] lg:px-10 lg:py-20">
        <p class="label pt-1 text-brand dark:text-brand-soft">02 / {{ t.workLabel }}</p>
        <div>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">{{ t.workTitle }}</h2>

          <ul class="mt-10">
            <li
              v-for="project in projects"
              :key="project.index"
              class="border-t border-rule dark:border-rule-dark"
            >
              <a
                :href="project.href"
                target="_blank"
                rel="noopener noreferrer"
                class="group grid gap-x-8 gap-y-2 py-6 sm:grid-cols-[minmax(0,1fr)_minmax(0,2fr)_1.25rem] lg:grid-cols-[13rem_minmax(0,1fr)_1.25rem]"
              >
                <div>
                  <p class="label whitespace-nowrap text-brand dark:text-brand-soft">
                    {{ project.index }} / {{ project.kind }}
                  </p>
                  <h3 class="mt-1.5 text-xl font-semibold transition group-hover:text-brand dark:group-hover:text-brand-soft">
                    {{ project.name }}
                  </h3>
                </div>
                <div class="max-w-xl">
                  <p class="text-sm leading-relaxed opacity-75">{{ project.blurb }}</p>
                  <p class="label mt-2 opacity-45">{{ project.stack }}</p>
                </div>
                <span
                  class="hidden self-center text-brand transition group-hover:translate-x-1 dark:text-brand-soft sm:block"
                  aria-hidden="true"
                  >&rarr;</span
                >
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- stack -->
    <section class="border-b border-rule dark:border-rule-dark">
      <div class="mx-auto grid max-w-6xl gap-x-12 gap-y-6 px-6 py-16 lg:grid-cols-[9rem_minmax(0,1fr)] lg:px-10 lg:py-20">
        <p class="label pt-1 text-brand dark:text-brand-soft">03 / {{ t.stackLabel }}</p>
        <div>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">{{ t.stackTitle }}</h2>
          <dl class="mt-10 max-w-3xl">
            <div
              v-for="row in stack"
              :key="row.group"
              class="grid gap-x-8 gap-y-1 border-t border-rule py-4 dark:border-rule-dark sm:grid-cols-[9rem_minmax(0,1fr)]"
            >
              <dt class="label pt-1 opacity-55">{{ row.group }}</dt>
              <dd>{{ row.items }}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <!-- contact -->
    <section>
      <div class="mx-auto grid max-w-6xl gap-x-12 gap-y-6 px-6 py-16 lg:grid-cols-[9rem_minmax(0,1fr)] lg:px-10 lg:py-20">
        <p class="label pt-1 text-brand dark:text-brand-soft">04 / {{ t.contactLabel }}</p>
        <div>
          <h2 class="text-3xl font-bold tracking-tight sm:text-4xl">{{ t.contactTitle }}</h2>
          <p class="mt-3 opacity-70">{{ t.contactLead }}</p>
          <dl class="mt-10 max-w-3xl">
            <div
              v-for="contact in contacts"
              :key="contact.label"
              class="grid gap-x-8 gap-y-1 border-t border-rule py-4 dark:border-rule-dark sm:grid-cols-[9rem_minmax(0,1fr)]"
            >
              <dt class="label pt-1 opacity-55">{{ contact.label }}</dt>
              <dd>
                <a
                  :href="contact.href"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="link"
                  >{{ contact.value }}</a
                >
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <footer class="border-t border-rule dark:border-rule-dark">
      <div class="label mx-auto flex max-w-6xl flex-col gap-2 px-6 py-6 opacity-55 lg:flex-row lg:justify-between lg:px-10">
        <span>Clever Lopes &mdash; Curitiba, Brazil</span>
        <span>{{ year }}</span>
      </div>
    </footer>
  </div>
</template>
