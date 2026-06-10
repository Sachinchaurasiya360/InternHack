
e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
l
a
b
e
l
i
z
e
(
v
a
l
u
e
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
r
e
t
u
r
n
 
v
a
l
u
e
.
r
e
p
l
a
c
e
(
/
_
/
g
,
 
"
 
"
)
.
t
o
L
o
w
e
r
C
a
s
e
(
)
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
f
o
r
m
a
t
L
a
b
e
l
(
v
a
l
u
e
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
r
e
t
u
r
n
 
v
a
l
u
e


 
 
 
 
.
r
e
p
l
a
c
e
(
/
_
/
g
,
 
"
 
"
)


 
 
 
 
.
t
o
L
o
w
e
r
C
a
s
e
(
)


 
 
 
 
.
r
e
p
l
a
c
e
(
/
\
b
\
w
/
g
,
 
(
c
)
 
=
>
 
c
.
t
o
U
p
p
e
r
C
a
s
e
(
)
)
;


}




e
x
p
o
r
t
 
f
u
n
c
t
i
o
n
 
i
n
i
t
i
a
l
s
(
f
i
r
s
t
?
:
 
s
t
r
i
n
g
,
 
l
a
s
t
?
:
 
s
t
r
i
n
g
)
:
 
s
t
r
i
n
g
 
{


 
 
r
e
t
u
r
n
 
`
$
{
f
i
r
s
t
?
.
[
0
]
 
?
?
 
"
"
}
$
{
l
a
s
t
?
.
[
0
]
 
?
?
 
"
"
}
`
.
t
o
U
p
p
e
r
C
a
s
e
(
)
 
|
|
 
"
?
"
;


}




e
x
p
o
r
t
 
c
o
n
s
t
 
l
a
b
e
l
C
l
a
s
s
 
=


 
 
"
b
l
o
c
k
 
t
e
x
t
-
[
1
0
p
x
]
 
f
o
n
t
-
m
o
n
o
 
u
p
p
e
r
c
a
s
e
 
t
r
a
c
k
i
n
g
-
w
i
d
e
s
t
 
t
e
x
t
-
s
t
o
n
e
-
5
0
0
 
m
b
-
1
.
5
"
;


