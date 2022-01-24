export type LineItem = {
  productId: number;
  quantity: number;
  discounted?: boolean;
  unitPrice: number;
};

export type FinalInvoice = {
  __typename: "FinalInvoice";
  insertedAt: string;
  invoiceNumber: string;
  customerId: number;
  approvedBy: number;
  lineItems: LineItem[];
};

export type DraftInvoice = {
  __typename: "DraftInvoice";
  insertedAt: string;
  invoiceNumber?: string;
  customerId?: number;
  approvedBy?: number;
  lineItems: LineItem[];
};

type Invoice = FinalInvoice | DraftInvoice;

const isFinalInvoice = (invoice: Invoice): invoice is FinalInvoice => {
  return invoice.__typename === "FinalInvoice";
};

const isDraftInvoice = (invoice: Invoice): invoice is DraftInvoice => {
  return invoice.__typename === "DraftInvoice";
};

const sendFinalInvoiceEmail = (invoice: FinalInvoice): void => {};

const sendDraftInvoiceEmail = (invoice: DraftInvoice): void => {};

const finalInvoiceToBeSend: Invoice = {
  __typename: "FinalInvoice",
  insertedAt: "2021-05-01",
  invoiceNumber: "fin12345",
  customerId: 6789,
  approvedBy: 111,
  lineItems: [],
};

const draftInvoiceToBeSend: Invoice = {
  __typename: "DraftInvoice",
  insertedAt: "2021-05-01",
  lineItems: [],
};

if (isFinalInvoice(finalInvoiceToBeSend)) {
  sendFinalInvoiceEmail(finalInvoiceToBeSend);
}

if (isDraftInvoice(draftInvoiceToBeSend)) {
  sendDraftInvoiceEmail(draftInvoiceToBeSend);
}
