// https://positionstack.com/documentation

const BASE_URL = "http://api.positionstack.com/v1/forward"

export const getLongLatFromAddress = async (address: string) => {
  try {
    const data = fetch(`${BASE_URL}?access_key=${process.env.NEXT_PUBLIC_POSITIONSTACK_API_KEY}&query=${address}`)
    .then(response => response.json())
    .then(res => {
      const { longitude, latitude, label } = res
      return {longitude, latitude, label}
    })

    return data
  } catch (error) {
    console.error(`ERROR getLongLatFromAddress (${address}): ${error}`)
  }
}