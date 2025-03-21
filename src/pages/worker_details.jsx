import React from 'react'
import "../style/worker_details.css"
import pic13 from "../media/pic13.jpg";

const worker_details = () => {
  return (
    <div className="container">
        <h2>Worker Details</h2>
        <table>
            <thead>
                <tr>
                    <th>S No.</th>
                    <th>Worker Name</th>
                    <th>Address</th>
                    <th>Contact Number</th>
                    <th>Picture</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Sourav Das</td>
                    <td>Barasat, Kolkata</td>
                    <td>+912345678910</td>
                    <td><img src={pic13}/></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Anirban Ghosh</td>
                    <td>Durgapur, West Bengal</td>
                    <td>+912345678910</td>
                    <td><img src={pic13}/></td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Priya Saha</td>
                    <td>Siliguri, West Bengal</td>
                    <td>+912345678910</td>
                    <td><img src={pic13}/></td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>Arpita Chatterjee</td>
                    <td>Howrah, West Bengal</td>
                    <td>+912345678910</td>
                    <td><img src={pic13}/></td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>Sourav Das</td>
                    <td>Barasat, Kolkata</td>
                    <td>+912345678910</td>
                    <td><img src={pic13}/></td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>Anirban Ghosh</td>
                    <td>Durgapur, West Bengal</td>
                    <td>+912345678910</td>
                    <td><img src={pic13}/></td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>Priya Saha</td>
                    <td>Siliguri, West Bengal</td>
                    <td>+912345678910</td>
                    <td><img src={pic13}/></td>
                </tr>
            </tbody>
        </table>
    </div>
  )
};

export default worker_details