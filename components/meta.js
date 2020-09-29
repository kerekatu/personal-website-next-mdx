import { NextSeo } from 'next-seo'
import PropTypes from 'prop-types'

const Meta = ({ pageSubtitle }) => {
  return <NextSeo title={`${pageSubtitle} – Konrad Rosa`}></NextSeo>
}

Meta.propTypes = {
  pageSubtitle: PropTypes.string.isRequired
}

export default Meta
