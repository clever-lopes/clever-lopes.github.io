import { computed, ref, watch } from 'vue'

export const LOCALES = ['en', 'pt'] as const
export type Locale = (typeof LOCALES)[number]

const STORAGE_KEY = 'locale'

function initialLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored && (LOCALES as readonly string[]).includes(stored)) {
    return stored as Locale
  }
  // English is the default, on purpose: the audience is not only Brazilian.
  return 'en'
}

export const locale = ref<Locale>(initialLocale())

watch(locale, (value) => {
  localStorage.setItem(STORAGE_KEY, value)
  document.documentElement.lang = value
})

export function toggleLocale() {
  locale.value = locale.value === 'en' ? 'pt' : 'en'
}

const messages = {
  en: {
    role: 'Fullstack Engineer',
    roleSub: 'TypeScript',
    profile: 'Profile',
    intro:
      'Fullstack TypeScript engineer in Curitiba, Brazil. I build products for the financial market and work across the whole stack, from the database to the interface.',
    photoCaption: 'Curitiba / BR',

    aboutLabel: 'About',
    aboutTitle: 'I build the whole product, not just the code.',
    aboutOne:
      'I work as a fullstack TypeScript engineer at Quantum Tech Holding, in the financial market. Architecture, UX and business constraints are part of the job, and I ship end to end.',
    aboutTwo:
      'Lately I have been deep in AI agents and developer tooling, and in software architecture: domain-driven design, clean architecture and modular monoliths. I also build and run my own product on my own infrastructure.',

    workLabel: 'Work',
    workTitle: 'Selected work.',

    stackLabel: 'Stack',
    stackTitle: 'What I work with.',
    groups: {
      languages: 'Languages',
      backend: 'Backend',
      frontend: 'Frontend',
      tooling: 'Tooling',
    },

    contactLabel: 'Contact',
    contactTitle: "Let's talk.",
    contactLead: 'Open to interesting problems and good conversation.',

    kinds: { product: 'Product', fullstack: 'Fullstack', frontend: 'Frontend' },
    projects: {
      caff: 'CRM for small sales teams. Nx monorepo with a NestJS API and a React dashboard, multi-tenant by design, shipped from CI to its own infrastructure.',
      delivery:
        'Order flow, user roles and real-time order status for a beverage distributor.',
      recipes:
        'Browse, search, filter and favorite recipes and drinks, with step-by-step preparation tracking.',
    },
  },

  pt: {
    role: 'Engenheiro Fullstack',
    roleSub: 'TypeScript',
    profile: 'Perfil',
    intro:
      'Engenheiro fullstack TypeScript em Curitiba, Brasil. Construo produtos para o mercado financeiro e atuo na stack inteira, do banco à interface.',
    photoCaption: 'Curitiba / BR',

    aboutLabel: 'Sobre',
    aboutTitle: 'Construo o produto inteiro, não só o código.',
    aboutOne:
      'Trabalho como engenheiro fullstack TypeScript na Quantum Tech Holding, no mercado financeiro. Arquitetura, UX e restrições de negócio fazem parte do trabalho, e eu entrego de ponta a ponta.',
    aboutTwo:
      'Recentemente tenho me aprofundado em agentes de IA e ferramentas para desenvolvedores, e em arquitetura de software: domain-driven design, clean architecture e monolitos modulares. Também construo e opero meu próprio produto na minha própria infraestrutura.',

    workLabel: 'Projetos',
    workTitle: 'Trabalhos selecionados.',

    stackLabel: 'Stack',
    stackTitle: 'Com o que eu trabalho.',
    groups: {
      languages: 'Linguagens',
      backend: 'Backend',
      frontend: 'Frontend',
      tooling: 'Ferramentas',
    },

    contactLabel: 'Contato',
    contactTitle: 'Vamos conversar.',
    contactLead: 'Aberto a problemas interessantes e boas conversas.',

    kinds: { product: 'Produto', fullstack: 'Fullstack', frontend: 'Frontend' },
    projects: {
      caff: 'CRM para times pequenos de vendas. Monorepo Nx com API NestJS e dashboard React, multi-tenant por design, publicado pela CI na própria infraestrutura.',
      delivery:
        'Fluxo de pedidos, papéis de usuário e status em tempo real para uma distribuidora de bebidas.',
      recipes:
        'Buscar, filtrar e favoritar receitas e drinks, com acompanhamento do preparo passo a passo.',
    },
  },
} as const

export const t = computed(() => messages[locale.value])
