# tumpaksewu

A package that makes it easy to create cascading dropdowns in nextjs.

## Example

```tsx
import Select from '@affandra-solusi-teknologi/tumpaksewu'
import { useState } from 'react'

export default function Home() {
  let [country, setCountry] = useState([]);
  let [province, setProvince] = useState([]);
  let [city, setCity] = useState([]);

  let data = {
    country: [
      { id: 1, name: 'Indonesia' },
      { id: 2, name: 'Malaysia' },
    ],
    province: [
      { id: 1, name: "Jawa Barat", country: 1 },
      { id: 2, name: "Jawa Tengah", country: 1 },
      { id: 3, name: "Sabah", country: 2 },
      { id: 4, name: "Serawak", country: 2 },
    ],
    city: [
      { id: 1, name: "Bandung", province: 1 },
      { id: 2, name: "Cirebon", province: 1 },
      { id: 3, name: "Purwokerto", province: 2 },
      { id: 4, name: "Semarang", province: 2 },
      { id: 5, name: "Kudat", province: 3 },
      { id: 6, name: "Papar", province: 3 },
      { id: 7, name: "Bintulu", province: 4 },
      { id: 8, name: "Matu", province: 4 },
    ]
  }

  return (
    <>
      <Select data={data} first={true} current="country" next="province" currentState={[country, setCountry]} nextState={[province, setProvince]}>
        <option selected disabled>Pilih negara</option>
        {country.map((x, idx) => {
          return <option key={idx} value={x.id}>{x.name}</option>
        })}
      </Select>

      <Select data={data} current="province" next="city" currentState={[province, setProvince]} nextState={[city, setCity]}>
        <option selected disabled>Pilih provinsi</option>
        {province.map((x, idx) => {
          return <option key={idx} value={x.id}>{x.name}</option>
        })}
      </Select>

      <Select data={data} current="city" currentState={[city, setCity]}>
        <option selected disabled>Pilih kota</option>
        {city.map((x, idx) => {
          return <option key={idx} value={x.id}>{x.name}</option>
        })}
      </Select>
    </>
  )
}

```
