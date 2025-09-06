



## Get start

ref: https://tailwindcss.com/docs/installation/using-vite

Init project
``` sh
npm create vite@latest my-project
cd my-project
```

Install tailwindcss
``` sh
npm install tailwindcss @tailwindcss/vite
```

Configure the Vite plugin
``` js
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})
```