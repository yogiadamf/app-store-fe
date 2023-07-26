import { useEffect } from 'react'

function DocumentTitle(title) {

  useEffect(() => {
    document.title = 'Microsft Store | '+ title;
  }, [title]);

}

export default DocumentTitle