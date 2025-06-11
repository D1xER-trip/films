import seriesData from '@/data/series.json'

export const fetchSeries = async () => {
  return seriesData
}

export const fetchSeriesById = async (id) => {
  return seriesData.find(series => series.id === Number(id)) || null
}