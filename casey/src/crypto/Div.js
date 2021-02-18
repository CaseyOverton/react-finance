


const ScrollBarPage = () => {
    const scrollContainerStyle = { width: "800px", maxHeight: "400px" };
    return (
      <MDBContainer>
        <div className="scrollbar scrollbar-primary  mt-5 mx-auto" style={scrollContainerStyle}>
          <img
            alt=""
            src="https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg"
          />
        </div>
  
        <div className="scrollbar my-5 mx-auto" style={scrollContainerStyle}>
          <img
            alt=""
            src="https://mdbootstrap.com/img/Photos/Others/img%20(51).jpg"
          />
        </div>
      </MDBContainer>
    );
  }
  
  export default Div;

