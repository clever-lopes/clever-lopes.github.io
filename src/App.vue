<script setup lang="ts">
import IconSun from '@/components/icons/IconSun.vue'
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)

const stack = {
  Languages: ['TypeScript', 'JavaScript', 'Go'],
  Backend: ['NestJS', 'Node.js', 'PostgreSQL', 'TypeORM'],
  Frontend: ['React', 'Vue', 'Tailwind CSS'],
  'Tooling & infra': ['Nx', 'Docker', 'GitHub Actions', 'Jest', 'Linux'],
}

const projects = [
  {
    name: 'Caff CRM',
    role: 'Own product, in development',
    blurb:
      'CRM for small sales teams. Nx monorepo with a NestJS API and a React dashboard, multi-tenant by design, deployed from CI to its own infrastructure.',
    tags: ['TypeScript', 'NestJS', 'React', 'Nx', 'PostgreSQL'],
    links: [{ label: 'caffcrm.com', href: 'https://caffcrm.com' }],
  },
  {
    name: 'Fullstack delivery app',
    role: 'Personal project',
    blurb:
      'Delivery platform for a beverage distributor: order flow, user roles and real-time order status.',
    tags: ['React', 'Node.js', 'Express', 'Sequelize'],
    links: [
      {
        label: 'Source',
        href: 'https://github.com/clever-lopes/fullstack-delivery-app',
      },
    ],
  },
  {
    name: 'Recipes app',
    role: 'Personal project',
    blurb:
      'Browse, search, filter and favorite recipes and drinks, with step-by-step preparation tracking.',
    tags: ['React', 'JavaScript', 'Context API'],
    links: [
      {
        label: 'Source',
        href: 'https://github.com/clever-lopes/frontend-recipes-app',
      },
    ],
  },
]

const contacts = [
  { label: 'Email', value: 'tk_clever.junior@outlook.com', href: 'mailto:tk_clever.junior@outlook.com' },
  { label: 'LinkedIn', value: '/in/clever-lopes', href: 'https://www.linkedin.com/in/clever-lopes/' },
  { label: 'GitHub', value: '@clever-lopes', href: 'https://github.com/clever-lopes' },
]
</script>

<template>
  <div class="min-h-screen bg-white text-slate-800 dark:bg-slate-950 dark:text-slate-200">
    <header class="mx-auto flex max-w-3xl items-center justify-between px-6 py-8">
      <span class="text-sm font-semibold tracking-tight">Clever Lopes</span>
      <button
        type="button"
        aria-label="Toggle dark mode"
        class="rounded-md p-2 transition hover:bg-slate-100 dark:hover:bg-slate-800"
        @click="toggleDark()"
      >
        <IconSun />
      </button>
    </header>

    <main class="mx-auto max-w-3xl px-6 pb-24">
      <section class="flex flex-col items-start gap-6 sm:flex-row sm:items-center">
        <img
          src="@/assets/User.jpeg"
          alt="Clever Lopes"
          width="112"
          height="112"
          class="h-28 w-28 shrink-0 rounded-full object-cover"
        />
        <div>
          <h1 class="text-3xl font-bold tracking-tight sm:text-4xl">Clever Lopes</h1>
          <p class="mt-1 text-lg text-slate-600 dark:text-slate-400">
            Fullstack TypeScript Engineer
          </p>
          <p class="mt-1 text-sm text-slate-500 dark:text-slate-500">Curitiba, Brazil</p>
        </div>
      </section>

      <section class="mt-12">
        <p class="text-lg leading-relaxed">
          I build products for the financial market at
          <a
            href="https://qtvgroup.com"
            class="font-medium underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500 dark:decoration-slate-600"
            >Quantum Tech Ventures</a
          >, mostly TypeScript across the whole stack.
        </p>
        <p class="mt-4 leading-relaxed text-slate-600 dark:text-slate-400">
          I work across the whole product, not just the code. Architecture, UX and business
          constraints are part of the job, and I ship end to end. Lately I have been deep in AI
          agents and developer tooling, and in software architecture: DDD, Clean Architecture and
          modular monoliths.
        </p>
      </section>

      <section class="mt-14">
        <h2 class="text-xs font-semibold uppercase tracking-widest text-slate-500">Stack</h2>
        <dl class="mt-5 space-y-4">
          <div v-for="(items, group) in stack" :key="group" class="sm:flex sm:gap-6">
            <dt class="w-40 shrink-0 text-sm text-slate-500 dark:text-slate-500">{{ group }}</dt>
            <dd class="mt-1 flex flex-wrap gap-2 sm:mt-0">
              <span
                v-for="item in items"
                :key="item"
                class="rounded-md bg-slate-100 px-2 py-1 text-sm dark:bg-slate-800"
                >{{ item }}</span
              >
            </dd>
          </div>
        </dl>
      </section>

      <section class="mt-14">
        <h2 class="text-xs font-semibold uppercase tracking-widest text-slate-500">
          Selected work
        </h2>
        <ul class="mt-5 space-y-8">
          <li
            v-for="project in projects"
            :key="project.name"
            class="border-l-2 border-slate-200 pl-5 dark:border-slate-800"
          >
            <div class="flex flex-wrap items-baseline gap-x-3">
              <h3 class="text-lg font-semibold">{{ project.name }}</h3>
              <span class="text-sm text-slate-500">{{ project.role }}</span>
            </div>
            <p class="mt-2 leading-relaxed text-slate-600 dark:text-slate-400">
              {{ project.blurb }}
            </p>
            <div class="mt-3 flex flex-wrap gap-2">
              <span
                v-for="tag in project.tags"
                :key="tag"
                class="rounded-md bg-slate-100 px-2 py-0.5 text-xs dark:bg-slate-800"
                >{{ tag }}</span
              >
            </div>
            <p class="mt-3 flex flex-wrap gap-4">
              <a
                v-for="link in project.links"
                :key="link.href"
                :href="link.href"
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm font-medium underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500 dark:decoration-slate-600"
                >{{ link.label }}</a
              >
            </p>
          </li>
        </ul>
      </section>

      <section class="mt-14">
        <h2 class="text-xs font-semibold uppercase tracking-widest text-slate-500">Contact</h2>
        <dl class="mt-5 space-y-2">
          <div v-for="contact in contacts" :key="contact.label" class="flex gap-6">
            <dt class="w-40 shrink-0 text-sm text-slate-500 dark:text-slate-500">
              {{ contact.label }}
            </dt>
            <dd>
              <a
                :href="contact.href"
                target="_blank"
                rel="noopener noreferrer"
                class="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500 dark:decoration-slate-600"
                >{{ contact.value }}</a
              >
            </dd>
          </div>
        </dl>
      </section>
    </main>
  </div>
</template>
