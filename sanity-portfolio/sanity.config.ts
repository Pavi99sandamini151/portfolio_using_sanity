import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'sanity Next.js portfolio',

  projectId: 'zw4xnmfb',
  dataset: 'production',

  basePath: "/studio",
  
  plugins: [structureTool()],

  schema: {
    types: schemaTypes,
  },
})

