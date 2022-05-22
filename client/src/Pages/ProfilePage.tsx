import React from 'react'
import { useState, useEffect } from 'react'
import { BsFillSquareFill } from 'react-icons/bs'

//import { BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import ratings from '../Data/NFTs/Ratings.json'

import ProfileCard from '../components/ProfileCard'
import ReviewCard from '../components/ReviewCard'

import NFT_1 from '../Data/NFTs/NFT_1.json'

import '../styles/profilepage.css'




function ProfilePage() {

    //state for views
    const [pageType, setPageType] = useState("home");
    const [viewType, setViewType] = useState("profile");

    //State for review form
    const [inclusiveRating, setInclusiveRating] = useState(0);
    const [expectationsRating, setExpectationsRating] = useState(0);
    const [trustRating, setTrustRating] = useState(0);
    const [commentText, setCommentText] = useState("");

    //State for company details
    const [companyName, setCompanyName] = useState("company A");
    const [companyDescription, setCompanyDescription] = useState("company a description");
    const [companyNFT, setCompanyNFT] = useState("company A NFT");
    const [companyIPFS, setCompanyIPFS] = useState("QmUCtmMYriaW5wC9QQxrFsgWUpCLddEVJygeCgAVagdbwL");




    const profileProps = { // make sure all required component's inputs/Props keys&types match
        companyName: "Company A",
        description: " Udemy, Inc. is a for-profit massive open online course provider aimed at professional adults and students. It was founded in May 2010 by Eren Bali, Gagan Biyani, and Oktay Caglar."
    }

    interface ReviewCardProps {
        MappedIPFSHash: string;
        Hash: string;
        inclusion: Number;
        expectations: Number;
        trustworthy: Number;
    }


    function sendReview(incl: any, exp: any, trust: any, comment: any) {
        //TODO: write review to chain
        //TODO: validate NFT matches company token
    }

    function setContractDetails() {
        //TODO: contract call NFT details

        setCompanyName('TODO')
        setCompanyDescription('TODO')
        setCompanyNFT('TODO')
        setCompanyIPFS('TODO')
    }

    function onCommentInputChange(e: any) {
        setCommentText(e.target.value)
    }
    return (
        <div className='profile-page-container'>
            <div className='profile-page-panel profile-card-container'>
                <ProfileCard {...profileProps}></ProfileCard>
            </div>

            <div className='profile-page-panel profile-comments-container'>
                <div className='section-nav-bar'>
                    <ul>
                        <a>
                            <li
                                className={
                                    'page-tab' + (viewType == 'view' ? ' active-page-tab' : ' ')
                                }
                                onClick={() => setViewType('view')}
                            >
                                view comments
                            </li>
                        </a>
                        <a>
                            <li className='page-tab' onClick={() => setViewType('submit')}>
                                send comments
                            </li>
                        </a>
                    </ul>
                </div>

                <div className="">

                    <div className='question-container'>
                        {viewType == "view" ?

                            <div> 
                                {
                                    ratings.filter(r => r.MappedIPFSHash == companyIPFS).map(function (rating) {

                                        var p = {
                                            MappedIPFSHash: rating.MappedIPFSHash,
                                            Hash: rating.Hash,
                                            inclusion: rating.inclusion,
                                            expectations: rating.expectations,
                                            trustworthy: rating.trustworthy,
                                            description: rating. description
                                        }

                                        return (
                                            <ReviewCard

                                                {...p}
                                            // MappedIPFSHash= {rating.MappedIPFSHash}
                                            // Hash = {rating.Hash}
                                            // inclusion= {rating.inclusion}
                                            // expectations={rating.expectations}
                                            // trustworthy={rating.trustworthy}


                                            > </ReviewCard>)
                                    })
                                }
                            </div>
                            :
                            <div>
                                <div className='question-block'>
                                    <h3 className='question-block-title'>How inclusive was this organization?</h3>
                                    <div className='question-block-stars'>
                                        <BsFillSquareFill onClick={() => setInclusiveRating(1)} color={((inclusiveRating > 0) && (inclusiveRating < 6)) ? "green" : "grey"} className='rating-box' />
                                        <BsFillSquareFill onClick={() => setInclusiveRating(2)} color={((inclusiveRating > 1) && (inclusiveRating < 6)) ? "green" : "grey"} className='rating-box' />
                                        <BsFillSquareFill onClick={() => setInclusiveRating(3)} color={((inclusiveRating > 2) && (inclusiveRating < 6)) ? "green" : "grey"} className='rating-box' />
                                        <BsFillSquareFill onClick={() => setInclusiveRating(4)} color={((inclusiveRating > 3) && (inclusiveRating < 6)) ? "green" : "grey"} className='rating-box' />
                                        <BsFillSquareFill onClick={() => setInclusiveRating(5)} color={((inclusiveRating > 4) && (inclusiveRating < 6)) ? "green" : "grey"} className='rating-box' />

                                    </div>
                                </div><br />

                                <div className='question-block'>
                                    <h3>Did this organization meet expectations of what they promised?</h3>
                                    <BsFillSquareFill onClick={() => setExpectationsRating(1)} color={((expectationsRating > 0) && (expectationsRating < 6)) ? "green" : "grey"} className='rating-box' />
                                    <BsFillSquareFill onClick={() => setExpectationsRating(2)} color={((expectationsRating > 1) && (expectationsRating < 6)) ? "green" : "grey"} className='rating-box' />
                                    <BsFillSquareFill onClick={() => setExpectationsRating(3)} color={((expectationsRating > 2) && (expectationsRating < 6)) ? "green" : "grey"} className='rating-box' />
                                    <BsFillSquareFill onClick={() => setExpectationsRating(4)} color={((expectationsRating > 3) && (expectationsRating < 6)) ? "green" : "grey"} className='rating-box' />
                                    <BsFillSquareFill onClick={() => setExpectationsRating(5)} color={((expectationsRating > 4) && (expectationsRating < 6)) ? "green" : "grey"} className='rating-box' />

                                </div><br />

                                <div className='question-block'>
                                    <h3 className='question-block-title'>Do you consider this a trustworthy organization?</h3>
                                    <BsFillSquareFill onClick={() => setTrustRating(1)} color={((trustRating > 0) && (trustRating < 6)) ? "green" : "grey"} className='rating-box' />
                                    <BsFillSquareFill onClick={() => setTrustRating(2)} color={((trustRating > 1) && (trustRating < 6)) ? "green" : "grey"} className='rating-box' />
                                    <BsFillSquareFill onClick={() => setTrustRating(3)} color={((trustRating > 2) && (trustRating < 6)) ? "green" : "grey"} className='rating-box' />
                                    <BsFillSquareFill onClick={() => setTrustRating(4)} color={((trustRating > 3) && (trustRating < 6)) ? "green" : "grey"} className='rating-box' />
                                    <BsFillSquareFill onClick={() => setTrustRating(5)} color={((trustRating > 4) && (trustRating < 6)) ? "green" : "grey"} className='rating-box' />

                                </div><br />

                                <div className='question-block'>
                                    <h3>comments:</h3>
                                    <textarea
                                        onChange={onCommentInputChange}
                                        className='add-comment-text'
                                    ></textarea>

                                    <br/>

                                    <div>
                                        <a
                                            onClick={() =>
                                                sendReview(
                                                    inclusiveRating,
                                                    expectationsRating,
                                                    trustRating,
                                                    commentText
                                                )
                                            }
                                            className='send-review'
                                        >
                                            submit review
                                        </a>
                                    </div>
                                </div>
                            </div>



                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
