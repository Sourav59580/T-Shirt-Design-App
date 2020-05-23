import React, { Component } from 'react'
import Display from '../design/Display'
import Setting from '../design/Setting'

class Dashboard extends Component {
    render() {
        return (
            <div className='container py-5'>
                <div className="row">
                   <div className="col-lg-8">
                        <Display/>
                   </div>
                   <div className="col-lg-4">
                        <Setting/>
                    </div>
                </div>  
            </div>
        )
    }
}

export default Dashboard
