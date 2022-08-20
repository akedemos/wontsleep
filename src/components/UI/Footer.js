import React from 'react'
import { Link } from 'gatsby'
import Grid from '@mui/material/Grid'
import MuiLink from '@mui/material/Link'
import Container from '@mui/material/Container'
import Typography from '../Utils/Typography'
import TextField from '../Utils/TextField'
import FacebookIcon from '../../assets/images/facebookIcon.png'
import TwitterIcon from '../../assets/images/twitterIcon.png'

function Copyright () {
  return (
    <>
      {'© '}
      <MuiLink color='inherit' href='https://snappywebdesign.net/'>
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}
    </>
  )
}

const LANGUAGES = [
  {
    code: 'en-US',
    name: 'English'
  },
  {
    code: 'fr-FR',
    name: 'Français'
  }
]

export default function Footer () {
  return (
    <Typography
      component='footer' sx={{
        display: 'flex',
        bgcolor: 'secondary.light'
      }}
    >
      <Container sx={{
        marginTop: 8,
        marginBottom: 8,
        display: 'flex'
      }}
      >
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Grid
              container
              direction='column'
              justifyContent='flex-end'
              sx={{
                height: 120
              }}
              spacing={2}
            >
              <Grid
                item sx={{
                  display: 'flex'
                }}
              >
                <a
                  href='/' sx={{
                    width: 48,
                    height: 48,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'warning.main',
                    mr: 1,
                    '&:hover': {
                      bgcolor: 'warning.dark'
                    }
                  }}
                >
                  <img src={FacebookIcon} alt='Facebook' />
                </a>
                <a
                  href='/'
                  sx={{
                    width: 48,
                    height: 48,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    bgcolor: 'warning.main',
                    mr: 1,
                    '&:hover': {
                      bgcolor: 'warning.dark'
                    }
                  }}
                >
                  <img src={TwitterIcon} alt='Twitter' />
                </a>
              </Grid>
              <Grid item>
                <Copyright />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={4} md={2}>
            <Typography variant='h6' marked='left' gutterBottom>
              Legal
            </Typography>
            <ul sx={{
              margin: 0,
              listStyle: 'none',
              padding: 0
            }}
            >
              <li sx={{
                pt: 0.5,
                pb: 0.5
              }}
              >
                <MuiLink component={Link} to='/terms'>
                  Terms
                </MuiLink>
              </li>
              <li sx={{
                pt: 0.5,
                pb: 0.5
              }}
              >
                <MuiLink component={Link} to='/privacy'>
                  Privacy
                </MuiLink>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={8} md={4}>
            <Typography variant='h6' marked='left' gutterBottom>
              Language
            </Typography>
            <TextField
              select
              SelectProps={{
                native: true
              }}
              sx={{
                mt: 1,
                width: 150
              }}
            >
              {LANGUAGES.map(language => (
                <option value={language.code} key={language.code}>
                  {language.name}
                </option>
              ))}
            </TextField>
          </Grid>
          <Grid item>
            <Typography variant='caption'>
              {'Icons made by '}
              <MuiLink
                href='https://www.freepik.com'
                rel='sponsored'
                title='Freepik'
              >
                Freepik
              </MuiLink>
              {' from '}
              <MuiLink
                href='https://www.flaticon.com'
                rel='sponsored'
                title='Flaticon'
              >
                www.flaticon.com
              </MuiLink>
              {' is licensed by '}
              <MuiLink
                href='https://creativecommons.org/licenses/by/3.0/'
                title='Creative Commons BY 3.0'
                target='_blank'
                rel='noopener noreferrer'
              >
                CC 3.0 BY
              </MuiLink>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='caption'>
              {'Theme ported by '}
              <MuiLink
                href='https://snappywebdesign.net'
                rel='tag'
                title='Snappy Web Design'
                target='_blank'
              >
                Snappy Web Design
              </MuiLink>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  )
}
