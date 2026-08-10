```ts
// Configurações gerais do site.
export const site = {
  name: 'JL SOLUTIONS',
  whatsappNumber: '5512982798846',
  whatsappMessage:
    'Olá! Vi o site da JL SOLUTIONS e quero atrair mais clientes com SEO. Pode me ajudar?',
  email: 'jeanlucas.solutions@gmail.com',
}

export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}
```
