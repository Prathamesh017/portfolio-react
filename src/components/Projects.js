import {
  Divider,
  Stack,
  Text,
  Container,
  Box,
  HStack,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  Heading,
  SimpleGrid,
  Badge,
  Link,
  Center,
} from '@chakra-ui/react'
import { Fade } from 'react-reveal'
import { useState } from 'react'
import ProjectsArray from './ProjectsArray'
import OtherProjectsArray from './OtherProjectsArray'
import TagsArray from './TagsArray'
import image0 from '../Images/image-0.png'
import image1 from '../Images/image-1.png'
import image2 from '../Images/image-2.png'
import image3 from '../Images/image-3.png'
import image4 from '../Images/image-4.png'
import image5 from '../Images/image-5.png'

export default function Projects({ color }) {
  const projects = ProjectsArray()
  const others = OtherProjectsArray()
  const options = TagsArray('ProjectsTags')
  const image = [image0, image1, image2, image3, image4, image5]

  const [selected, setSelected] = useState('All')
  console.log(projects)

  const handleSelected = (value) => {
    setSelected(value)
  }

  return (
    <>
      <Container maxW={'3xl'} id="projects">
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          pb={{ base: 20, md: 36 }}
        >
          <Stack align="center" direction="row" p={4}>
            <HStack mx={4}>
              <Text color={`${color}.400`} fontWeight={800}>
                03
              </Text>
              <Text fontWeight={800}>Projects</Text>
            </HStack>
            <Divider orientation="horizontal" />
          </Stack>
          <Stack px={4} spacing={4}>
            {projects.map((project, index) => (
              <Fade bottom>
                <Card
                  key={project.name}
                  direction={{
                    base: 'column',
                  }}
                  overflow="hidden"
                >
                  <img objectFit="fit" src={image[index]} alt="pt" />

                  <Stack>
                    <CardBody align="left">
                      <Heading size="md">{project.name}</Heading>

                      <Text py={2}>{project.description}</Text>

                      <HStack py={2}>
                        {project.buttons.map((button) => (
                          <a key={button.text} href={button.href}>
                            <Button color={`${color}.400`}>
                              {button.text}
                            </Button>
                          </a>
                        ))}
                      </HStack>
                      <HStack pt={4} spacing={2}>
                        {project.badges.map((badge) => (
                          <Badge
                            key={badge.text}
                            colorScheme={badge.colorScheme}
                          >
                            {badge.text}
                          </Badge>
                        ))}
                      </HStack>
                    </CardBody>
                  </Stack>
                </Card>
              </Fade>
            ))}
          </Stack>
        </Stack>
      </Container>
    </>
  )
}
