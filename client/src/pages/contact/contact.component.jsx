import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { ContactPageContainer, ContactDetails, ContactHeading } from './contact.styles';
import Spinner from '../../components/spinner/spinner.component';

export const ContactPage = () => {
    return (
        <ContactPageContainer>
            <Suspense fallback={<Spinner />}>
                <ContactDetails>

                    <ContactHeading>Call us : +91-9876543210</ContactHeading>
                    <ContactHeading>Mail us : estylish@gmail.com</ContactHeading>
                    <ContactHeading>Connect with us : <i class="fa fa-facebook-official fa-lg" aria-hidden="true"></i> &nbsp;<i class="fa fa-instagram fa-lg" aria-hidden="true"></i> &nbsp;<i class="fa fa-twitter-square fa-lg" aria-hidden="true"></i>  </ContactHeading>


                </ContactDetails>

            </Suspense>
        </ContactPageContainer>
    )
}