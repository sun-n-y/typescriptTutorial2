// fetch data

import { z } from 'zod';

const url = 'https://www.course-api.com/react-tours-project';

const tourSchema = z.object({
  id: z.string(), // is it a string or not(error happens)
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
});

type Tour = z.infer<typeof tourSchema>;

async function fetchData(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status:${response.status}`);
    }
    const rawData: Tour[] = await response.json();
    const result = tourSchema.array().safeParse(rawData);
    if (!result.success) {
      throw new Error(`invalid data: ${result.error}`);
    }
    return result.data;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'there was an error';
    console.log(errorMsg);
    return [];
  }
}

const tours = await fetchData(url);
tours.map((tour) => {
  console.log(tour);
});
