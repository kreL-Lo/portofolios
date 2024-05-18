import {
  Typography,
  Link,
  TextField,
  Button,
  useMediaQuery,
  Snackbar,
} from '@mui/material'
import React, { useState } from 'react'
import InstagramIcon from '@mui/icons-material/Instagram'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import MailIcon from '@mui/icons-material/Mail'
import PhoneIcon from '@mui/icons-material/Phone'
import './Contact.css'
import emailjs from '@emailjs/browser';

type ContactData = {
  firstName: string,
  lastName: string,
  email: string,
  phoneNumber: string,
  subject: string,
  message: string,
}
const ContactInfoMobile = () => {
  const [contactData, setContactData] = useState<ContactData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });



  return (
    <div
      style={{
        borderRadius: '8px',
        backgroundColor: 'black',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        margin: 10,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: 10,
            flexDirection: 'column',
            //center it
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
            }}
          >
            Contact Information
          </Typography>
          <Typography
            sx={{
              fontSize: 14,
              color: 'lightgrey',
              opacity: 0.8,
              paddingBottom: 5,
            }}
          >
            Say something or start a chat
          </Typography>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 40,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <PhoneIcon />
            <Typography> (+40) 752 773 633</Typography>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 20,
            }}
          >
            <MailIcon />
            <Typography>ciprian.miru@gmail.com</Typography>
          </div>
        </div>
      </div>

      <div
        style={{
          paddingTop: 50,
          display: 'flex',
          flexDirection: 'row',
          width: '100%',
          justifyContent: 'center',

          gap: 10,
        }}
      >
        <RoundCirlceDiv
          IconType={FacebookIcon}
          href="https://www.facebook.com/profile.php?id=100011421130774"
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: 'white',
          }}
        >
          <Link href="https://www.instagram.com/ciprianmiru/">
            <InstagramIcon
              style={{
                color: 'black',
              }}
            />
          </Link>
        </div>
        <RoundCirlceDiv
          IconType={LinkedInIcon}
          href="https://www.linkedin.com/in/ciprian-m-699113141/"
        />
      </div>
    </div>
  )
}
const RoundCirlceDiv = ({
  href,
  IconType,
  isActive = false,
}: {
  backgroundColor?: string
  href: string
  IconType: any
  isActive?: boolean
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        borderRadius: '50%',
      }}
      className={'hoverIconDiv'}
    >
      <Link href={href}>
        <IconType className={'hoverIcon'} />
      </Link>
    </div>
  )
}


const RightSideContat = (
  {
    setIsMessageSent
  }: {
    setIsMessageSent: React.Dispatch<React.SetStateAction<boolean>>
  }
) => {

  const isMobile = !useMediaQuery('(min-width:600px)')
  const [contactData, setContactData] = useState<ContactData>({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    subject: '',
    message: '',
  });
  const setContactDataField = (field: string, value: string) => {
    setContactData({
      ...contactData,
      [field]: value,
    });
  }
  const [disableMessage, setDisableMessage] = useState(false);
  const handleSend = async () => {
    setDisableMessage(true);
    try {
      await emailjs.send("service_tzakflm", "template_h1kqygh", { ...contactData });
      setIsMessageSent(true);

    }
    catch (e) {
    }

  }
  return (
    <div
      style={{
        height: '100%',
        padding: 20,
        display: 'flex',
        flexDirection: 'column',
        gap: 40,
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          gap: 50,
        }}
      >
        <TextField
          label={<div>First Name</div>}
          variant="standard"
          style={{
            width: isMobile ? '100%' : '50%',
          }}
        />
        <TextField
          label={
            <div
              style={{
                color: 'black',
                fontWeight: 'bolder',
              }}
            >
              Last Name
            </div>
          }
          variant="standard"
          style={{
            width: isMobile ? '100%' : '50%',
          }}
          onChange={(e) => setContactDataField('lastName', e.target.value)}
        />
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          justifyContent: 'space-between',
          gap: 50,
        }}
      >
        <TextField
          label={<div>Email</div>}
          error={
            contactData.email.length > 0 &&
            !contactData.email.includes('@')
          }
          variant="standard"
          style={{
            width: isMobile ? '100%' : '50%',
          }}
          onChange={(e) => setContactDataField('email', e.target.value)}
        />

        <TextField
          label={
            <div
              style={{
                fontWeight: 'bolder',
                color: 'black',
              }}
            >
              Phone Number
            </div>
          }
          onChange={(e) => setContactDataField('phoneNumber', e.target.value)}
          variant="standard"
          type="number"
          style={{
            width: isMobile ? '100%' : '50%',
          }}
        />
      </div>
      <TextField label={<div>Subject</div>} variant="standard" onChange={(e) => setContactDataField('subject', e.target.value)} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <TextField
          onChange={(e) => setContactDataField('message', e.target.value)}
          label={
            <div
              style={{
                fontWeight: 'bolder',
                color: 'black',
              }}
            >
              Message
            </div>
          }
          rows={isMobile ? 1 : 4}
          variant="standard"
          multiline
          placeholder="Write your message here..."
        />
        <div
          style={{
            padding: 10,
            width: '100%',
            display: 'flex',
            justifyContent: 'flex-end',
            paddingTop: 20,
            paddingBottom: isMobile ? 40 : 0,
          }}
        >
          <Button
            variant="contained"
            sx={{
              backgroundColor: 'black',
            }}
            disabled={disableMessage}
            onClick={() => {
              handleSend();
            }}
          >
            Send Message
          </Button>
        </div>
      </div>
    </div>
  )
}
const Contact = () => {
  const [isMessageSent, setIsMessageSent] = useState(false);

  const isMobile = !useMediaQuery('(min-width:600px)')
  return (
    <div
      style={{
        //background white if mobile
        backgroundColor: isMobile ? 'white' : 'rgb(134,149,164,0.2)',
        height: 'calc(100vh - 40px)',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
          Contact Me
        </Typography>
        <Typography
          sx={{
            paddingTop: 1,
            color: 'rgb(134,149,164,0.9)',
            fontWeight: 'bold',
            //center if mobile
            textAlign: isMobile ? 'center' : 'left',
            //some padding from sized if mobile
            paddingLeft: isMobile ? 5 : 0,
            paddingRight: isMobile ? 5 : 0,
          }}
        >
          Any question or remarks? Just write me a message
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
          backgroundColor: 'white',
          height: '70vh',
          borderRadius: '10px',
          //no margin if mobile
          margin: isMobile ? 0 : 10,
          flexDirection: isMobile ? 'column' : 'row',
        }}
      >
        {isMobile && <ContactInfoMobile />}
        {!isMobile && (
          <div
            style={{
              flex: '0 0 30%',
              margin: 10,
              borderRadius: '8px',
              backgroundColor: 'black',
              color: 'white',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: 30,
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 100,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  gap: 20,
                  flexDirection: 'column',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 'bold',
                  }}
                >
                  Contact Information
                </Typography>
                <Typography
                  sx={{
                    fontSize: 14,
                    color: 'lightgrey',
                    opacity: 0.8,
                  }}
                >
                  Say something or start a chat
                </Typography>
              </div>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 30,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                  }}
                >
                  <PhoneIcon />
                  <Typography> (+40) 752 773 633</Typography>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    gap: 20,
                  }}
                >
                  <MailIcon />
                  <Typography>
                    ciprian.miru@gmail.com
                  </Typography>
                </div>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                gap: 10,
              }}
            >
              <RoundCirlceDiv
                IconType={FacebookIcon}
                href="https://www.facebook.com/profile.php?id=100011421130774"
              />
              <RoundCirlceDiv
                IconType={InstagramIcon}
                href="https://www.instagram.com/ciprianmiru/"
              />
              <RoundCirlceDiv
                IconType={LinkedInIcon}
                href="https://www.linkedin.com/in/ciprian-m-699113141/"
              />
            </div>
          </div>
        )}
        <div
          style={{
            flex: 1,
            height: '100%',
          }}
        >
          <RightSideContat setIsMessageSent={setIsMessageSent} />
        </div>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        message="Message sent"
        open={isMessageSent}
        autoHideDuration={1000}
        onClose={() => {
          setIsMessageSent(false);
        }} />
    </div>
  )
}

export default Contact
