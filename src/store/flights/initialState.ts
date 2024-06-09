import { FlightResult } from '../../api/types';

interface InitialState {
  data: FlightResult[];
  countToShowFlights: number;
  renderData: FlightResult[];
  isLoading: boolean;
}

export const initialState: InitialState = {
  isLoading: false,
  countToShowFlights: 2,
  renderData: [],
  data: [
    {
      hasExtendedFare: false,
      flight: {
        carrier: {
          uid: '',
          caption: '',
          airlineCode: '',
        },
        price: {
          total: {
            amount: '',
            currency: '',
            currencyCode: '',
          },
          totalFeeAndTaxes: {
            amount: '',
            currency: '',
            currencyCode: '',
          },
          rates: {
            totalUsd: {
              amount: '',
              currencyCode: '',
            },
            totalEur: {
              amount: '',
              currencyCode: '',
            },
          },
          passengerPrices: [
            {
              total: {
                amount: '',
                currency: '',
                currencyCode: '',
              },
              passengerType: {
                uid: '',
                caption: '',
              },
              singlePassengerTotal: {
                amount: '',
                currency: '',
                currencyCode: '',
              },
              passengerCount: 0,
              tariff: {
                amount: '',
                currency: '',
                currencyCode: '',
              },
              feeAndTaxes: {
                amount: '',
                currency: '',
                currencyCode: '',
              },
            },
          ],
        },
        servicesStatuses: {
          baggage: {
            uid: '',
            caption: '',
          },
          exchange: {
            uid: '',
            caption: '',
          },
          refund: {
            uid: '',
            caption: '',
          },
        },
        legs: [
          {
            duration: 0,
            segments: [
              {
                classOfServiceCode: '',
                classOfService: {
                  uid: '',
                  caption: '',
                },
                departureAirport: {
                  uid: '',
                  caption: '',
                },
                departureCity: {
                  uid: '',
                  caption: '',
                },
                aircraft: {
                  uid: '',
                  caption: '',
                },
                travelDuration: 0,
                arrivalCity: {
                  uid: '',
                  caption: '',
                },
                arrivalDate: '',
                flightNumber: '',
                techStopInfos: [],
                departureDate: '',
                stops: 0,
                servicesDetails: {
                  freeCabinLuggage: {},
                  paidCabinLuggage: {},
                  tariffName: '',
                  fareBasis: {
                    ADULT: '',
                  },
                  freeLuggage: {
                    ADULT: {
                      pieces: 0,
                      nil: false,
                      unit: '',
                    },
                  },
                  paidLuggage: {},
                },
                airline: {
                  uid: '',
                  caption: '',
                  airlineCode: '',
                },
                starting: false,
                arrivalAirport: {
                  uid: '',
                  caption: '',
                },
              },
              {
                classOfServiceCode: '',
                classOfService: {
                  uid: '',
                  caption: '',
                },
                departureAirport: {
                  uid: '',
                  caption: '',
                },
                departureCity: {
                  uid: '',
                  caption: '',
                },
                aircraft: {
                  uid: '',
                  caption: '',
                },
                travelDuration: 0,
                arrivalCity: {
                  uid: '',
                  caption: '',
                },
                arrivalDate: '',
                flightNumber: '',
                techStopInfos: [],
                departureDate: '',
                stops: 0,
                servicesDetails: {
                  freeCabinLuggage: {},
                  paidCabinLuggage: {},
                  tariffName: '',
                  fareBasis: {
                    ADULT: '',
                  },
                  freeLuggage: {
                    ADULT: {
                      pieces: 0,
                      nil: false,
                      unit: '',
                    },
                  },
                  paidLuggage: {},
                },
                airline: {
                  uid: '',
                  caption: '',
                  airlineCode: '',
                },
                starting: false,
                arrivalAirport: {
                  uid: '',
                  caption: '',
                },
              },
            ],
          },
        ],
        exchange: {
          exchangeableBeforeDeparture: false,
          exchangeAfterDeparture: {
            amount: '',
            currency: '',
            currencyCode: '',
          },
          exchangeBeforeDeparture: {
            amount: '',
            currency: '',
            currencyCode: '',
          },
          exchangeableAfterDeparture: false,
        },
        isTripartiteContractDiscountApplied: false,
        international: false,
        seats: [
          {
            count: 0,
            type: {
              uid: '',
              caption: '',
            },
          },
        ],
        refund: {
          ADULT: {
            refundableBeforeDeparture: false,
            refundableAfterDeparture: false,
          },
        },
      },
      flightToken: '',
    },
  ],
};
