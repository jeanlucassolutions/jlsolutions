// Configurações gerais do site. Ajuste estes valores com os dados reais da empresa.
export const site = {
  name: 'Ranklocal',
  // Número no formato internacional, apenas dígitos (DDI + DDD + número).
  whatsappNumber: '5511999999999',
  whatsappMessage:
    'Olá! Vi o site da Ranklocal e quero atrair mais clientes com SEO. Pode me ajudar?',
  email: 'contato@ranklocal.com.br',
}

export function whatsappLink(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}
