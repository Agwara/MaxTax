export const calculatePageNumber = (prevUrl, nextUrl, lengthOfData, total) => { // returns [start, end, total]
  // check if it's first page
  if(!prevUrl) return [1, lengthOfData, total];
  
  let prevPageNumber = prevUrl.split("page=")[1];
  prevPageNumber = parseInt(prevPageNumber);

  if(!nextUrl) return [(prevPageNumber * 10) + 1, total, total];

  let nextPageNumber = nextUrl.split("page=")[1];
  nextPageNumber = parseInt(nextPageNumber);
  let start = (nextPageNumber - 2) * lengthOfData + 1;

  let end = (start + lengthOfData) - 1; 

  return [start, end , total];

}
