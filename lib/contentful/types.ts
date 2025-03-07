export interface Review {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    reviewText: string;
    rating: string;
  };
}

export interface USP {
  sys: {
    id: string;
  };
  fields: {
    name: string;
    image: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    description: string;
  };
}
