import React from 'react';
import './Pricing.css'


export default function Pricing() {

    return (<div className="demo" >
        <div className="container">
            <div className="row">
                <div className="col-md-4 col-sm-6">
                    <div className="pricingTable">
                        <div className="pricingTable-header">
                            <h3 className="title">Standard</h3>
                        </div>
                        <div className="price-value">
                            <span className="amount">$10</span>
                            <span className="duration">/month</span>
                        </div>
                        <ul className="pricing-content">
                            <li><i className="fa fa-cloud"></i> 50GB Disk Space</li>
                            <li><i className="fa fa-envelope"></i> 50 Email Accounts</li>
                            <li><i className="fa fa-hdd"></i> 50GB Bandwidth</li>
                            <li className="disable"><i className="fa fa-cog"></i> Maintenance</li>
                            <li className="disable"><i className="fa fa-share-alt"></i> 15 Subdomains</li>
                        </ul>
                        <div className="pricingTable-signup">
                            <a href="#">Sign Up</a>
                        </div>
                    </div>
                </div>

                <div className="col-md-4 col-sm-6">
                    <div className="pricingTable green">
                        <div className="pricingTable-header">
                            <h3 className="title">Business</h3>
                        </div>
                        <div className="price-value">
                            <span className="amount">$20</span>
                            <span className="duration">/month</span>
                        </div>
                        <ul className="pricing-content">
                            <li><i className="fa fa-cloud"></i> 50GB Disk Space</li>
                            <li><i className="fa fa-envelope"></i> 50 Email Accounts</li>
                            <li><i className="fa fa-hdd"></i> 50GB Bandwidth</li>
                            <li className="disable"><i className="fa fa-cog"></i> Maintenance</li>
                            <li className="disable"><i className="fa fa-share-alt"></i> 15 Subdomains</li>
                        </ul>
                        <div className="pricingTable-signup">
                            <a href="#">Sign Up</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="pricingTable pink">
                        <div className="pricingTable-header">
                            <h3 className="title">Premium</h3>
                        </div>
                        <div className="price-value">
                            <span className="amount">$30</span>
                            <span className="duration">/month</span>
                        </div>
                        <ul className="pricing-content">
                            <li><i className="fa fa-cloud"></i> 50GB Disk Space</li>
                            <li><i className="fa fa-envelope"></i> 50 Email Accounts</li>
                            <li><i className="fa fa-hdd"></i> 50GB Bandwidth</li>
                            <li className="disable"><i className="fa fa-cog"></i> Maintenance</li>
                            <li className="disable"><i className="fa fa-share-alt"></i> 15 Subdomains</li>
                        </ul>
                        <div className="pricingTable-signup">
                            <a href="#">Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

