import { getFingerprint, getFingerprintData } from './fingerprint/functions'
import * as packageJson from '../package.json'
import './components'

function getVersion(): string {
    return packageJson.version
}

export { getFingerprint as S, getFingerprintData as SD }