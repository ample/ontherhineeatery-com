import React from "react"
import PropTypes from "prop-types"

import ContentContainer from "./content"
import FormContainer from "./form"
import LocationContainer from "./location"
import VendorsContainer from "./vendors"

const compMap = {
  ContentfulLocationContainer: LocationContainer,
  ContentfulFormContainer: FormContainer,
  ContentfulContentContainer: ContentContainer,
  ContentfulVendorsContainer: VendorsContainer
}

const Containers = props => (
  <div>
    {props.data.map(n => {
      const TagName = compMap[n.__typename]
      return <TagName key={n.title} {...n} />
    })}
  </div>
)

Containers.propTypes = {
  data: PropTypes.array.isRequired
}

Containers.defaultProps = {}

export default Containers
