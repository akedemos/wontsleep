import { Delete } from '@mui/icons-material'
import { Box, Button, IconButton, ImageList, ImageListItem, ImageListItemBar, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import ReactImageUploading from 'react-images-uploading'
import Centered from '../../components/Centered/Centered'
import PageHeader from '../../components/PageHeader/PageHeader'
import Main from '../../layouts/Main'

const AlbumAdd = () => {
  const [images, setImages] = React.useState([])
  const maxNumber = 69

  const onChange = (imageList) => {
    setImages(imageList)
  }

  return (
    <Main>
      <Container>
        <ReactImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey='data_url'
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageRemove,
            isDragging,
            dragProps
          }) => (
            // write your building UI
            <>
              <PageHeader title='Add To Album' actions={<Button onClick={onImageRemoveAll}>Clear all images</Button>} />

              <Box sx={{ display: 'flex', justifyContent: 'flex-end', my: 1 }}>
                <Button
                  variant='outlined'
                  sx={{ mr: 1 }}
                  onClick={onImageUpload}
                >
                  Add Images
                </Button>
                <Button
                  sx={{ mr: 1 }}
                  variant='contained'
                  onClick={() => console.log(imageList)}
                >
                  Submit
                </Button>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  border: 1,
                  borderRadius: 1,
                  minHeight: 100,
                  bgcolor: isDragging ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)'
                }}
                {...dragProps}
              >
                {imageList?.length < 1
                  ? (
                    <Centered>
                      <Typography variant='h6'>You can drop items here to add</Typography>
                    </Centered>
                    )
                  : (
                    <ImageList variant='masonry' cols={3} gap={4} sx={{ margin: 1 }}>
                      {imageList.map((image, index) => (
                        <ImageListItem key={index}>
                          <img
                            src={image.data_url}
                            loading='lazy'
                          />
                          <ImageListItemBar
                            actionIcon={
                              <IconButton
                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                onClick={() => onImageRemove(index)}
                              >
                                <Delete />
                              </IconButton>
                            }
                          />
                        </ImageListItem>
                      ))}
                    </ImageList>
                    )}
              </Box>
            </>
          )}
        </ReactImageUploading>
      </Container>
    </Main>
  )
}

export default AlbumAdd
