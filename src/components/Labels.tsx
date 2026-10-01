import { useEffect, useState } from 'react'
import SpecLabel from './SpecLabel'

const bar = (pct: number, size = 12) => {
  const filled = Math.round((pct / 100) * size)
  return `[${'#'.repeat(filled)}${'.'.repeat(size - filled)}] ${String(Math.round(pct)).padStart(2, '0')}%`
}
const clamp = (n: number, min: number, max: number) => Math.min(max, Math.max(min, n))

// Container Docker (valores fictícios)
export function DockerLabel() {
  return (
    <SpecLabel
      serial="089   875   3   3 2 4   1476280   86597883   5   512   23456"
      columns={[
        { title: 'CONTAINER', lines: ['api-gateway', 'ID 3F9A1C27B0D4'] },
        { title: 'IMAGE', lines: ['node:20-alpine', 'postgres:16'] },
        { title: 'PORTS', lines: ['0.0.0.0:3000->3000/tcp', '0.0.0.0:5432->5432/tcp'] },
        { title: 'STATUS', lines: ['UP 14 DAYS', 'HEALTHY'] },
      ]}
      notice="RESTRICTED TO CLEARED PERSONNEL // MAY CONTAIN SECRETS (.ENV)"
    />
  )
}

// CPU / memória / rede com valores que oscilam devagar (fictícios)
export function ResourcesLabel() {
  const [s, setS] = useState({ cpu: 34, mem: 61, rx: 1.2, tx: 0.4 })

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => {
      setS((p) => ({
        cpu: clamp(p.cpu + (Math.random() - 0.5) * 14, 6, 92),
        mem: clamp(p.mem + (Math.random() - 0.5) * 4, 40, 85),
        rx: clamp(p.rx + (Math.random() - 0.5) * 0.6, 0.1, 4),
        tx: clamp(p.tx + (Math.random() - 0.5) * 0.3, 0.05, 2),
      }))
    }, 1500)
    return () => clearInterval(id)
  }, [])

  const memMb = Math.round((s.mem / 100) * 512)
  return (
    <SpecLabel
      columns={[
        { title: 'CPU', lines: [bar(s.cpu), '2.0 CORES / 4 THREADS'] },
        { title: 'MEMORY', lines: [bar(s.mem), `${memMb} MiB / 512 MiB`] },
        { title: 'NET I/O', lines: [`RX ${s.rx.toFixed(2)} MB/s`, `TX ${s.tx.toFixed(2)} MB/s`] },
        { title: 'PROCESSES', lines: ['PID 1  node', 'PID 27 postgres'] },
      ]}
      notice="DOCKER STATS // NO-STREAM // REFRESH 1.5S"
    />
  )
}

// Cabeçalho de pacote de rede (valores fictícios)
export function PacketLabel() {
  return (
    <SpecLabel
      serial="45 00 05 DC  1A 2B 40 00  40 06 00 00  0A 00 00 0C  0A 00 00 01"
      columns={[
        { title: 'SRC', lines: ['10.0.0.12:51724', 'MAC 02:42:AC:11:00:02'] },
        { title: 'DST', lines: ['10.0.0.1:443', 'TLS 1.3'] },
        { title: 'PACKET', lines: ['LEN 1460 BYTES', 'TTL 64 / PROTO TCP'] },
        { title: 'FLAGS', lines: ['SYN ACK', 'SEQ 1476280'] },
      ]}
      notice="PAYLOAD ENCRYPTED // HANDLE WITH CARE"
    />
  )
}

// Informações genéricas de git (valores fictícios)
export function GitLabel() {
  return (
    <SpecLabel
      serial="a3f9c21e7b04d85f1c62a9e03b7d4f18c5e2a690"
      columns={[
        { title: 'BRANCH', lines: ['main', 'origin/main'] },
        { title: 'HEAD', lines: ['a3f9c21', 'TAG v1.0.0'] },
        { title: 'AHEAD / BEHIND', lines: ['0 / 0', 'WORKING TREE CLEAN'] },
        { title: 'LAST COMMIT', lines: ['feat: add portfolio', 'AUTHOR LUCAS LUNA'] },
      ]}
      notice="GIT LOG --ONELINE // 128 COMMITS // 3 BRANCHES"
    />
  )
}
