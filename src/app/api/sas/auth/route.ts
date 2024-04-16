import { NextResponse } from 'next/server'

const DOMAIN_URL = "https://rmdemo.unx.sas.com"
const SAS_LOGON = "/SASLogon/oauth/token"

const username: string = "sas.ec";
const password: string = "";
const authorizationData = 'Basic ' + btoa(username + ':' + password);

export async function POST(request: Request) {
    const res = await fetch(DOMAIN_URL + SAS_LOGON, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json',
            'Authorization': authorizationData
        },
        body: JSON.stringify({ "username": "demo66", "password": "Go4thsas", "grant_type": "password" })
    })

    const resSAS: any = await res.json()

    return NextResponse.json(resSAS)
}