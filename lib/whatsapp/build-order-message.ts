export interface WhatsAppOrderItem {
  name: string;
  quantity: number;
  unitPrice: number;
}

export interface WhatsAppOrderPayload {
  customerName: string;
  items: WhatsAppOrderItem[];
  total: number;
}

export function buildOrderMessage(payload: WhatsAppOrderPayload): string {
  const items = payload.items
    .map((item) => `${item.quantity}x ${item.name} — R$ ${item.unitPrice.toFixed(2)}`)
    .join('\n');

  return [
    'Olá! Gostaria de fazer um pedido:',
    '',
    items,
    '',
    `Total: R$ ${payload.total.toFixed(2)}`,
    `Nome: ${payload.customerName}`,
  ].join('\n');
}
