import PropTyes from "prop-types"

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    datas: PropTyes.array(PropTyes.shape({
        value: PropTyes.string.isRequired,
        text: PropTyes
    })),
}