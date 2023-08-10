import { CubeIcon, LeaftIcon, PowIcon } from "$/components/icons"

const TIER = [
  {
    name: 'Basic',
    price: 'Rp.150.000',
    discountedPrice: 'Rp.100.000',
    icon: <LeaftIcon />,
    features: [
      {
        name: 'Mencatat barang masuk',
        heighlight: false,
      },
      {
        name: 'Mencatat barang keluar',
        heighlight: false,
      },
      {
        name: 'Mencatat Keuntungan',
        heighlight: false,
      },
    ],
  },
  {
    name: 'Business',
    price: 'Rp.300.000',
    discountedPrice: 'Rp.120.000',
    icon: <PowIcon />,
    features: [
      {
        name: 'Semua fitur Basic',
        heighlight: true,
      },
      {
        name: 'Analisa penjualan dengan CHART',
        heighlight: false,
      },
      {
        name: 'Support 7x24 Jam',
        heighlight: false,
      },
    ],
  },
  {
    name: 'Entrepreneur',
    price: 'Rp.1000.0000',
    discountedPrice: 'Rp.499.000',
    icon: < CubeIcon />,
    features: [
      {
        name: 'Semua fitur Business',
        heighlight: true,
      },
      {
        name: 'Export data ke Excel',
        heighlight: false,
      },
      {
        name: 'AI Prediksi penghasilan',
        heighlight: false,
      }
    ],
  }
]

export default TIER
