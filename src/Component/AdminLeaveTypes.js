import Layout from '../Component/layoutComponent';
import React from 'react'
import {Link}  from "react-router-dom";
function AdminleaveTypes(){
    return(
        <>
        <Layout/>
        <section className='admin-leave-types'>
            <div className="container">
                <div className="inner-admin-leave-frame">
                    <div className="admin-leave-btn">
                      <Link to ="/main/admin-add-new-leave">Add New Leave</Link>
                    </div>
                    <div className="admin-leave-types-table">
                    <table>
                <tr>
                  <th>S.N</th>
                  <th>Leave Type</th>
                  <th>Description</th>
                  <th>Number of Leaves</th>
                  <th>Created</th>
                  <th>Details</th>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Casual Leave</td>
                  <td>Provided for urgent</td>
                  <td>5</td>
                  <td>10 Aug 2023</td>
                  <td>
                    <button>Edit Leave</button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Casual Leave</td>
                  <td>Provided for urgent</td>
                  <td>5</td>
                  <td>11 Aug 2023</td>
                  <td>
                    <button>Edit Leave</button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Casual Leave</td>
                  <td>Provided for urgent</td>
                  <td>5</td>
                  <td>12 Aug 2023</td>
                  <td>
                    <button>Edit Leave</button>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Casual Leave</td>
                  <td>Provided for urgent</td>
                  <td>5</td>
                  <td>13 Aug 2023</td>
                  <td>
                    <button>Edit Leave</button>
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Casual Leave</td>
                  <td>Provided for urgent</td>
                  <td>5</td>
                  <td>14 Aug 2023</td>
                  <td>
                    <button>Edit Leave</button>
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Casual Leave</td>
                  <td>Provided for urgent</td>
                  <td>5</td>
                  <td>15 Aug 2023</td>
                  <td>
                    <button>Edit Leave</button>
                  </td>
                </tr>
              </table>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}

export default AdminleaveTypes;