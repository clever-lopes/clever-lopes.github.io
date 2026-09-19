<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const year = new Date().getFullYear()

const projects = [
  {
    index: '01',
    kind: 'Product',
    name: 'Caff CRM',
    blurb:
      'CRM for small sales teams. Nx monorepo with a NestJS API and a React dashboard, multi-tenant by design, shipped from CI to its own infrastructure.',
    stack: 'TypeScript · NestJS · React · Nx · PostgreSQL',
    href: 'https://caffcrm.com',
  },
  {
    index: '02',
    kind: 'Fullstack',
    name: 'Delivery Platform',
    blurb:
      'Order flow, user roles and real-time order status for a beverage distributor.',
    stack: 'React · Node.js · Express · Sequelize',
    href: 'https://github.com/clever-lopes/fullstack-delivery-app',
  },
  {
    index: '03',
    kind: 'Frontend',
    name: 'Recipes App',
    blurb:
      'Browse, search, filter and favorite recipes and drinks, with step-by-step preparation tracking.',
    stack: 'React · JavaScript · Context API',
    href: 'https://github.com/clever-lopes/frontend-recipes-app',
  },
]

const stack = [
  { group: 'Languages', items: 'TypeScript · JavaScript · Go' },
  { group: 'Backend', items: 'NestJS · Node.js · PostgreSQL · TypeORM' },
  { group: 'Frontend', items: 'React · Vue · Tailwind CSS' },
  { group: 'Tooling', items: 'Nx · Docker · GitHub Actions · Jest · Linux' },
]

const contacts = [
  { label: 'Email', value: 'tk_clever.junior@outlook.com', href: 'mailto:tk_clever.junior@outlook.com' },
  { label: 'LinkedIn', value: 'in/clever-lopes', href: 'https://www.linkedin.com/in/clever-lopes/' },
  { label: 'GitHub', value: 'clever-lopes', href: 'https://github.com/clever-lopes' },
]
</script>

<template>
  <div
    class="min-h-screen bg-paper font-sans text-ink antialiased dark:bg-ink dark:text-paper"
  >
    <!-- header -->
    <header
      class="flex items-center justify-between border-b border-rule px-6 py-5 dark:border-rule-dark sm:px-10"
    >
      <span class="label">Clever Lopes</span>
      <div class="flex items-center gap-6">
        <span class="label hidden text-right leading-relaxed opacity-60 sm:block">
          Fullstack Engineer<br />TypeScript
        </span>
        <button
          type="button"
          aria-label="Toggle theme"
          class="label border border-rule px-3 py-1.5 transition hover:bg-ink hover:text-paper dark:border-rule-dark dark:hover:bg-paper dark:hover:text-ink"
          @click="toggleDark()"
        >
          {{ isDark ? 'Light' : 'Dark' }}
        </button>
      </div>
    </header>

    <!-- hero -->
    <section class="grid border-b border-rule dark:border-rule-dark lg:grid-cols-2">
      <div class="flex flex-col justify-between px-6 py-12 sm:px-10 lg:py-20">
        <p class="label opacity-60">Profile / {{ year }}</p>

        <h1 class="mt-14 text-[clamp(3.5rem,11vw,7.5rem)] font-semibold leading-[0.88] tracking-[-0.04em]">
          Clever<br />Lopes
        </h1>

        <p class="mt-14 max-w-md font-serif text-xl leading-snug sm:text-2xl">
          Fullstack TypeScript engineer in Curitiba, Brazil. He builds products for the
          financial market and works across the whole stack, from the database to the
          interface.
        </p>
      </div>

      <div class="relative min-h-[22rem] bg-ink lg:min-h-0">
        <img
          src="@/assets/User.jpeg"
          alt="Clever Lopes"
          class="h-full w-full object-cover grayscale"
        />
        <div
          class="label absolute inset-x-0 bottom-0 flex justify-between px-5 py-4 text-paper mix-blend-difference"
        >
          <span>Clever Lopes</span>
          <span>0001 / B&amp;W</span>
        </div>
      </div>
    </section>

    <!-- about -->
    <section class="grid gap-y-8 border-b border-rule px-6 py-20 dark:border-rule-dark sm:px-10 lg:grid-cols-[14rem_1fr] lg:py-28">
      <p class="label opacity-60">01 / About</p>
      <div class="max-w-3xl">
        <h2 class="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Engineering the whole<br class="hidden sm:block" />
          product, not just the code.
        </h2>
        <div class="mt-12 grid gap-8 text-[0.95rem] leading-relaxed sm:grid-cols-2">
          <p>
            I work as a fullstack TypeScript engineer at
            <a
              href="https://qtvgroup.com"
              class="underline decoration-1 underline-offset-4 opacity-100 transition hover:opacity-60"
              >Quantum Tech Ventures</a
            >, a holding in the financial market. Architecture, UX and business constraints
            are part of the job, and I ship end to end.
          </p>
          <p>
            Lately I have been deep in AI agents and developer tooling, and in software
            architecture: domain-driven design, clean architecture and modular monoliths.
            I also build and run my own product on my own infrastructure.
          </p>
        </div>
      </div>
    </section>

    <!-- work -->
    <section class="grid gap-y-8 border-b border-rule px-6 py-20 dark:border-rule-dark sm:px-10 lg:grid-cols-[14rem_1fr] lg:py-28">
      <p class="label opacity-60">02 / Work</p>
      <div>
        <h2 class="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Selected work.
        </h2>

        <ul class="mt-14">
          <li
            v-for="project in projects"
            :key="project.index"
            class="border-t border-rule dark:border-rule-dark"
          >
            <a
              :href="project.href"
              target="_blank"
              rel="noopener noreferrer"
              class="group grid gap-x-8 gap-y-3 py-8 transition sm:grid-cols-[9rem_1fr_1.5rem] lg:grid-cols-[9rem_16rem_1fr_1.5rem]"
            >
              <span class="label whitespace-nowrap pt-2 opacity-60"
                >{{ project.index }} / {{ project.kind }}</span
              >
              <h3 class="font-serif text-3xl leading-tight transition group-hover:opacity-60">
                {{ project.name }}
              </h3>
              <div class="max-w-md">
                <p class="text-sm leading-relaxed opacity-80">{{ project.blurb }}</p>
                <p class="label mt-3 opacity-50">{{ project.stack }}</p>
              </div>
              <span
                class="hidden self-start pt-3 text-lg transition group-hover:translate-x-1 sm:block"
                aria-hidden="true"
                >&rarr;</span
              >
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- stack -->
    <section class="grid gap-y-8 border-b border-rule px-6 py-20 dark:border-rule-dark sm:px-10 lg:grid-cols-[14rem_1fr] lg:py-28">
      <p class="label opacity-60">03 / Stack</p>
      <dl class="max-w-3xl">
        <div
          v-for="row in stack"
          :key="row.group"
          class="grid gap-x-8 gap-y-1 border-t border-rule py-5 dark:border-rule-dark sm:grid-cols-[10rem_1fr]"
        >
          <dt class="label pt-1 opacity-60">{{ row.group }}</dt>
          <dd class="text-[0.95rem]">{{ row.items }}</dd>
        </div>
      </dl>
    </section>

    <!-- contact -->
    <section class="grid gap-y-8 px-6 py-20 sm:px-10 lg:grid-cols-[14rem_1fr] lg:py-28">
      <p class="label opacity-60">04 / Contact</p>
      <div class="max-w-3xl">
        <h2 class="font-serif text-4xl leading-[1.05] tracking-tight sm:text-5xl">
          Let's talk.
        </h2>
        <dl class="mt-14">
          <div
            v-for="contact in contacts"
            :key="contact.label"
            class="grid gap-x-8 gap-y-1 border-t border-rule py-5 dark:border-rule-dark sm:grid-cols-[10rem_1fr]"
          >
            <dt class="label pt-1 opacity-60">{{ contact.label }}</dt>
            <dd>
              <a
                :href="contact.href"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-1 underline-offset-4 transition hover:opacity-60"
                >{{ contact.value }}</a
              >
            </dd>
          </div>
        </dl>
      </div>
    </section>

    <footer
      class="label flex flex-col gap-2 border-t border-rule px-6 py-8 opacity-60 dark:border-rule-dark sm:flex-row sm:justify-between sm:px-10"
    >
      <span>Clever Lopes &mdash; Curitiba, Brazil</span>
      <span>{{ year }}</span>
    </footer>
  </div>
</template>
