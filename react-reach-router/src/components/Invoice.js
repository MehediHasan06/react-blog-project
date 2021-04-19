const Invoice = (props) => (
  <div>
    {/* 
      In react-router, we had to use the "useParams()" hooks to get the url parameter. In this case, we get it from the props. 
    */}
    <h2>Invoice {props.invoiceId}</h2>
  </div>
);

export default Invoice;
