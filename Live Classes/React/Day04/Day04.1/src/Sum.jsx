function Sum({ num }) {
  return (
    <h1>
      Total sum is : {num >= 0 ? (num * (num + 1)) / 2 : (-num * (num - 1)) / 2}
    </h1>
  );
}

export default Sum;
