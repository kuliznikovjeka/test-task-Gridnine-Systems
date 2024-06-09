interface Airline {
  uid: string;
  caption: string;
  airlineCode: string;
}

interface Airport {
  uid: string;
  caption: string;
}

interface BaggageInfo {
  uid: string;
  caption: string;
}

interface ClassOfService {
  uid: string;
  caption: string;
}

interface FareBasis {
  ADULT: string;
}

interface Luggage {
  ADULT: {
    pieces: number;
    nil: boolean;
    unit: string;
  };
}

interface Price {
  amount: string;
  currency: string;
  currencyCode: string;
}

interface PassengerType {
  uid: string;
  caption: string;
}

interface PassengerPrice {
  total: Price;
  passengerType: PassengerType;
  singlePassengerTotal: Price;
  passengerCount: number;
  tariff: Price;
  feeAndTaxes: Price;
}

interface ServicesDetails {
  freeCabinLuggage: unknown;
  paidCabinLuggage: unknown;
  tariffName: string;
  fareBasis: FareBasis;
  freeLuggage: Luggage;
  paidLuggage: unknown;
}

interface FlightSegment {
  classOfServiceCode: string;
  classOfService: ClassOfService;
  departureAirport: Airport;
  departureCity: Airport;
  aircraft: {
    uid: string;
    caption: string;
  };
  travelDuration: number;
  arrivalCity: Airport;
  arrivalDate: string;
  flightNumber: string;
  techStopInfos: unknown[];
  departureDate: string;
  stops: number;
  servicesDetails: ServicesDetails;
  airline: Airline;
  starting: boolean;
  arrivalAirport: Airport;
  operatingAirline?: Airline;
}

interface FlightLeg {
  duration: number;
  segments: FlightSegment[];
}

interface Exchange {
  exchangeableBeforeDeparture: boolean;
  exchangeAfterDeparture: Price;
  exchangeBeforeDeparture: Price;
  exchangeableAfterDeparture: boolean;
}

interface RefundPolicy {
  refundableBeforeDeparture: boolean;
  refundableAfterDeparture: boolean;
}

interface Flight {
  carrier: Airline;
  price: {
    total: Price;
    totalFeeAndTaxes: Price;
    rates: {
      totalUsd: Price;
      totalEur: Price;
    };
    passengerPrices: PassengerPrice[];
  };
  servicesStatuses: {
    baggage: BaggageInfo;
    exchange: BaggageInfo;
    refund: BaggageInfo;
  };
  legs: FlightLeg[];
  exchange: Exchange;
  isTripartiteContractDiscountApplied: boolean;
  international: boolean;
  seats: {
    count: number;
    type: PassengerType;
  }[];
  refund: {
    ADULT: RefundPolicy;
  };
}

interface FlightResult {
  hasExtendedFare: boolean;
  flight: Flight;
  flightToken: string;
}

interface FlightResponse {
  result: {
    flights: FlightResult[];
  };
}

export type { FlightResponse, FlightResult, Flight, Price, FlightSegment, Airport };
