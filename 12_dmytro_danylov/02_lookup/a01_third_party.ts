export interface ExternalUser {
  id: number;
  name: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
}
