
i
m
p
o
r
t
 
i
n
i
t
S
q
l
J
s
,
 
{
 
t
y
p
e
 
D
a
t
a
b
a
s
e
 
}
 
f
r
o
m
 
"
s
q
l
.
j
s
"
;




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
Q
u
e
r
y
R
e
s
u
l
t
 
{


 
 
c
o
l
u
m
n
s
:
 
s
t
r
i
n
g
[
]
;


 
 
r
o
w
s
:
 
(
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
n
u
l
l
)
[
]
[
]
;


 
 
e
r
r
o
r
?
:
 
s
t
r
i
n
g
;


 
 
t
i
m
e
M
s
:
 
n
u
m
b
e
r
;


 
 
r
o
w
C
o
u
n
t
:
 
n
u
m
b
e
r
;


}




e
x
p
o
r
t
 
i
n
t
e
r
f
a
c
e
 
T
a
b
l
e
I
n
f
o
 
{


 
 
n
a
m
e
:
 
s
t
r
i
n
g
;


 
 
c
o
l
u
m
n
s
:
 
{
 
n
a
m
e
:
 
s
t
r
i
n
g
;
 
t
y
p
e
:
 
s
t
r
i
n
g
 
}
[
]
;


}




c
l
a
s
s
 
S
q
l
E
n
g
i
n
e
 
{


 
 
p
r
i
v
a
t
e
 
d
b
:
 
D
a
t
a
b
a
s
e
 
|
 
n
u
l
l
 
=
 
n
u
l
l
;


 
 
p
r
i
v
a
t
e
 
i
n
i
t
P
r
o
m
i
s
e
:
 
P
r
o
m
i
s
e
<
v
o
i
d
>
 
|
 
n
u
l
l
 
=
 
n
u
l
l
;


 
 
p
r
i
v
a
t
e
 
l
o
a
d
e
d
D
a
t
a
s
e
t
s
 
=
 
n
e
w
 
S
e
t
<
s
t
r
i
n
g
>
(
)
;




 
 
a
s
y
n
c
 
i
n
i
t
(
)
:
 
P
r
o
m
i
s
e
<
v
o
i
d
>
 
{


 
 
 
 
i
f
 
(
t
h
i
s
.
d
b
)
 
r
e
t
u
r
n
;


 
 
 
 
i
f
 
(
t
h
i
s
.
i
n
i
t
P
r
o
m
i
s
e
)
 
r
e
t
u
r
n
 
t
h
i
s
.
i
n
i
t
P
r
o
m
i
s
e
;




 
 
 
 
t
h
i
s
.
i
n
i
t
P
r
o
m
i
s
e
 
=
 
(
a
s
y
n
c
 
(
)
 
=
>
 
{


 
 
 
 
 
 
c
o
n
s
t
 
S
Q
L
 
=
 
a
w
a
i
t
 
i
n
i
t
S
q
l
J
s
(
{


 
 
 
 
 
 
 
 
l
o
c
a
t
e
F
i
l
e
:
 
(
f
i
l
e
:
 
s
t
r
i
n
g
)
 
=
>


 
 
 
 
 
 
 
 
 
 
`
h
t
t
p
s
:
/
/
c
d
n
.
j
s
d
e
l
i
v
r
.
n
e
t
/
n
p
m
/
s
q
l
.
j
s
@
1
.
1
4
.
1
/
d
i
s
t
/
$
{
f
i
l
e
}
`
,


 
 
 
 
 
 
}
)
;


 
 
 
 
 
 
t
h
i
s
.
d
b
 
=
 
n
e
w
 
S
Q
L
.
D
a
t
a
b
a
s
e
(
)
;


 
 
 
 
}
)
(
)
;




 
 
 
 
r
e
t
u
r
n
 
t
h
i
s
.
i
n
i
t
P
r
o
m
i
s
e
;


 
 
}




 
 
a
s
y
n
c
 
l
o
a
d
D
a
t
a
s
e
t
(
n
a
m
e
:
 
s
t
r
i
n
g
,
 
s
q
l
:
 
s
t
r
i
n
g
)
:
 
P
r
o
m
i
s
e
<
v
o
i
d
>
 
{


 
 
 
 
a
w
a
i
t
 
t
h
i
s
.
i
n
i
t
(
)
;


 
 
 
 
i
f
 
(
t
h
i
s
.
l
o
a
d
e
d
D
a
t
a
s
e
t
s
.
h
a
s
(
n
a
m
e
)
)
 
r
e
t
u
r
n
;


 
 
 
 
t
h
i
s
.
d
b
!
.
r
u
n
(
s
q
l
)
;


 
 
 
 
t
h
i
s
.
l
o
a
d
e
d
D
a
t
a
s
e
t
s
.
a
d
d
(
n
a
m
e
)
;


 
 
}




 
 
a
s
y
n
c
 
r
e
s
e
t
D
a
t
a
s
e
t
(
n
a
m
e
:
 
s
t
r
i
n
g
,
 
s
q
l
:
 
s
t
r
i
n
g
)
:
 
P
r
o
m
i
s
e
<
v
o
i
d
>
 
{


 
 
 
 
a
w
a
i
t
 
t
h
i
s
.
i
n
i
t
(
)
;


 
 
 
 
/
/
 
D
r
o
p
 
t
a
b
l
e
s
 
f
o
r
 
t
h
i
s
 
d
a
t
a
s
e
t
 
t
h
e
n
 
r
e
c
r
e
a
t
e


 
 
 
 
c
o
n
s
t
 
t
a
b
l
e
s
 
=
 
t
h
i
s
.
g
e
t
S
c
h
e
m
a
(
)
;


 
 
 
 
f
o
r
 
(
c
o
n
s
t
 
t
 
o
f
 
t
a
b
l
e
s
)
 
{


 
 
 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
 
 
t
h
i
s
.
d
b
!
.
r
u
n
(
`
D
R
O
P
 
T
A
B
L
E
 
I
F
 
E
X
I
S
T
S
 
"
$
{
t
.
n
a
m
e
}
"
`
)
;


 
 
 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
 
 
/
/
 
i
g
n
o
r
e


 
 
 
 
 
 
}


 
 
 
 
}


 
 
 
 
t
h
i
s
.
l
o
a
d
e
d
D
a
t
a
s
e
t
s
.
c
l
e
a
r
(
)
;


 
 
 
 
t
h
i
s
.
d
b
!
.
r
u
n
(
s
q
l
)
;


 
 
 
 
t
h
i
s
.
l
o
a
d
e
d
D
a
t
a
s
e
t
s
.
a
d
d
(
n
a
m
e
)
;


 
 
}




 
 
a
s
y
n
c
 
e
x
e
c
u
t
e
(
s
q
l
:
 
s
t
r
i
n
g
)
:
 
P
r
o
m
i
s
e
<
Q
u
e
r
y
R
e
s
u
l
t
>
 
{


 
 
 
 
a
w
a
i
t
 
t
h
i
s
.
i
n
i
t
(
)
;


 
 
 
 
c
o
n
s
t
 
s
t
a
r
t
 
=
 
p
e
r
f
o
r
m
a
n
c
e
.
n
o
w
(
)
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
u
l
t
s
 
=
 
t
h
i
s
.
d
b
!
.
e
x
e
c
(
s
q
l
)
;


 
 
 
 
 
 
c
o
n
s
t
 
t
i
m
e
M
s
 
=
 
M
a
t
h
.
r
o
u
n
d
(
(
p
e
r
f
o
r
m
a
n
c
e
.
n
o
w
(
)
 
-
 
s
t
a
r
t
)
 
*
 
1
0
0
)
 
/
 
1
0
0
;




 
 
 
 
 
 
i
f
 
(
r
e
s
u
l
t
s
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
{


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
c
o
l
u
m
n
s
:
 
[
]
,
 
r
o
w
s
:
 
[
]
,
 
t
i
m
e
M
s
,
 
r
o
w
C
o
u
n
t
:
 
0
 
}
;


 
 
 
 
 
 
}




 
 
 
 
 
 
/
/
 
R
e
t
u
r
n
 
l
a
s
t
 
r
e
s
u
l
t
 
s
e
t
 
(
f
o
r
 
m
u
l
t
i
-
s
t
a
t
e
m
e
n
t
 
q
u
e
r
i
e
s
)


 
 
 
 
 
 
c
o
n
s
t
 
l
a
s
t
 
=
 
r
e
s
u
l
t
s
[
r
e
s
u
l
t
s
.
l
e
n
g
t
h
 
-
 
1
]
;


 
 
 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
 
 
c
o
l
u
m
n
s
:
 
l
a
s
t
.
c
o
l
u
m
n
s
,


 
 
 
 
 
 
 
 
r
o
w
s
:
 
l
a
s
t
.
v
a
l
u
e
s
 
a
s
 
(
s
t
r
i
n
g
 
|
 
n
u
m
b
e
r
 
|
 
n
u
l
l
)
[
]
[
]
,


 
 
 
 
 
 
 
 
t
i
m
e
M
s
,


 
 
 
 
 
 
 
 
r
o
w
C
o
u
n
t
:
 
l
a
s
t
.
v
a
l
u
e
s
.
l
e
n
g
t
h
,


 
 
 
 
 
 
}
;


 
 
 
 
}
 
c
a
t
c
h
 
(
e
r
r
:
 
u
n
k
n
o
w
n
)
 
{


 
 
 
 
 
 
c
o
n
s
t
 
t
i
m
e
M
s
 
=
 
M
a
t
h
.
r
o
u
n
d
(
(
p
e
r
f
o
r
m
a
n
c
e
.
n
o
w
(
)
 
-
 
s
t
a
r
t
)
 
*
 
1
0
0
)
 
/
 
1
0
0
;


 
 
 
 
 
 
r
e
t
u
r
n
 
{


 
 
 
 
 
 
 
 
c
o
l
u
m
n
s
:
 
[
]
,


 
 
 
 
 
 
 
 
r
o
w
s
:
 
[
]
,


 
 
 
 
 
 
 
 
e
r
r
o
r
:
 
e
r
r
 
i
n
s
t
a
n
c
e
o
f
 
E
r
r
o
r
 
?
 
e
r
r
.
m
e
s
s
a
g
e
 
:
 
S
t
r
i
n
g
(
e
r
r
)
,


 
 
 
 
 
 
 
 
t
i
m
e
M
s
,


 
 
 
 
 
 
 
 
r
o
w
C
o
u
n
t
:
 
0
,


 
 
 
 
 
 
}
;


 
 
 
 
}


 
 
}




 
 
g
e
t
S
c
h
e
m
a
(
)
:
 
T
a
b
l
e
I
n
f
o
[
]
 
{


 
 
 
 
i
f
 
(
!
t
h
i
s
.
d
b
)
 
r
e
t
u
r
n
 
[
]
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
c
o
n
s
t
 
t
a
b
l
e
s
 
=
 
t
h
i
s
.
d
b
.
e
x
e
c
(


 
 
 
 
 
 
 
 
"
S
E
L
E
C
T
 
n
a
m
e
 
F
R
O
M
 
s
q
l
i
t
e
_
m
a
s
t
e
r
 
W
H
E
R
E
 
t
y
p
e
=
'
t
a
b
l
e
'
 
O
R
D
E
R
 
B
Y
 
n
a
m
e
"


 
 
 
 
 
 
)
;


 
 
 
 
 
 
i
f
 
(
t
a
b
l
e
s
.
l
e
n
g
t
h
 
=
=
=
 
0
)
 
r
e
t
u
r
n
 
[
]
;




 
 
 
 
 
 
r
e
t
u
r
n
 
t
a
b
l
e
s
[
0
]
.
v
a
l
u
e
s
.
m
a
p
(
(
[
t
a
b
l
e
N
a
m
e
]
:
 
u
n
k
n
o
w
n
[
]
)
 
=
>
 
{


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
l
s
 
=
 
t
h
i
s
.
d
b
!
.
e
x
e
c
(
`
P
R
A
G
M
A
 
t
a
b
l
e
_
i
n
f
o
(
"
$
{
t
a
b
l
e
N
a
m
e
}
"
)
`
)
;


 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
o
l
u
m
n
s
 
=


 
 
 
 
 
 
 
 
 
 
c
o
l
s
.
l
e
n
g
t
h
 
>
 
0


 
 
 
 
 
 
 
 
 
 
 
 
?
 
c
o
l
s
[
0
]
.
v
a
l
u
e
s
.
m
a
p
(
(
r
o
w
:
 
u
n
k
n
o
w
n
[
]
)
 
=
>
 
(
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
:
 
S
t
r
i
n
g
(
r
o
w
[
1
]
)
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
:
 
S
t
r
i
n
g
(
r
o
w
[
2
]
)
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
)
)


 
 
 
 
 
 
 
 
 
 
 
 
:
 
[
]
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
{
 
n
a
m
e
:
 
S
t
r
i
n
g
(
t
a
b
l
e
N
a
m
e
)
,
 
c
o
l
u
m
n
s
 
}
;


 
 
 
 
 
 
}
)
;


 
 
 
 
}
 
c
a
t
c
h
 
{


 
 
 
 
 
 
r
e
t
u
r
n
 
[
]
;


 
 
 
 
}


 
 
}




 
 
i
s
R
e
a
d
y
(
)
:
 
b
o
o
l
e
a
n
 
{


 
 
 
 
r
e
t
u
r
n
 
t
h
i
s
.
d
b
 
!
=
=
 
n
u
l
l
;


 
 
}


}




/
/
 
S
i
n
g
l
e
t
o
n


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
 
s
q
l
E
n
g
i
n
e
 
=
 
n
e
w
 
S
q
l
E
n
g
i
n
e
(
)
;


