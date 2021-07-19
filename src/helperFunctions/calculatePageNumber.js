export const calculatePageNumber = (prevUrl, nextUrl, lengthOfData, total) => { // returns [start, end, total]
  // check if it's first page
  if(!prevUrl) return [1, lengthOfData, total];

  let prevPageNumber = prevUrl.split("page=")[1];
  prevPageNumber = parseInt(prevPageNumber);

  let nextPageNumber = nextUrl.split("page=")[1];
  nextPageNumber = parseInt(nextPageNumber);
  const start = (nextPageNumber - 1) * lengthOfData + 1;
  const end = (start + lengthOfData) - 1; 
  // check if it's last page 
  if(!nextUrl) return [(prevPageNumber * lengthOfData) + 1, total, total];
  console.log("here")
  return [start, end, total];
}
