import ServicesCard from "./ServiceCard/ServicesCard.jsx";
import "./Services.css"
const Services = ()=>{
const imgLink = ["https://www.ongraph.com/wp-content/uploads/2022/01/developer.svg","https://www.ongraph.com/wp-content/uploads/2022/01/project.svg","https://www.ongraph.com/wp-content/uploads/2022/01/application.svg","https://www.ongraph.com/wp-content/uploads/2022/01/job.svg","https://www.ongraph.com/wp-content/uploads/2022/01/client.svg","https://www.ongraph.com/wp-content/uploads/2022/01/rating.svg"];
const data_number = ["250+","500+","114","96%","218","4.7"];
const title = ["Top Developer","Project Completed","Application delivered","Project Success","Enterprise Customer","star Rating"];
return(
<section className = "card-section">
  <div className="card-services">
  <ServicesCard imgProps = {imgLink[0]} data_numberProps = {data_number[0]} titleProps = {title[0]}/>
  <hr />
  <ServicesCard imgProps = {imgLink[1]} data_numberProps = {data_number[1]} titleProps = {title[1]}/>
  <hr />
  <ServicesCard imgProps = {imgLink[2]} data_numberProps = {data_number[2]} titleProps = {title[2]}/>
  <hr />
  <ServicesCard imgProps = {imgLink[3]} data_numberProps = {data_number[3]} titleProps = {title[3]}/>
  <hr />
  <ServicesCard imgProps = {imgLink[4]} data_numberProps = {data_number[4]} titleProps = {title[4]}/>
  <hr />
  <ServicesCard imgProps = {imgLink[5]} data_numberProps = {data_number[5]} titleProps = {title[5]}/>
  </div>
</section>
)
}

export default Services;
