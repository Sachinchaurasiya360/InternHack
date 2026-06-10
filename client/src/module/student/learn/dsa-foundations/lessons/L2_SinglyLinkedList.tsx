
i
m
p
o
r
t
 
{
 
u
s
e
M
e
m
o
,
 
u
s
e
S
t
a
t
e
 
}
 
f
r
o
m
 
"
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{
 
B
o
o
k
O
p
e
n
,
 
C
o
d
e
2
,
 
L
i
g
h
t
b
u
l
b
,
 
P
l
a
y
,
 
T
a
r
g
e
t
 
}
 
f
r
o
m
 
"
l
u
c
i
d
e
-
r
e
a
c
t
"
;


i
m
p
o
r
t
 
{


 
 
L
e
s
s
o
n
S
h
e
l
l
,


 
 
t
y
p
e
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
,


 
 
t
y
p
e
 
L
e
s
s
o
n
T
a
b
D
e
f
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
L
e
s
s
o
n
S
h
e
l
l
"
;


i
m
p
o
r
t
 
{


 
 
A
l
g
o
C
a
n
v
a
s
,


 
 
I
n
p
u
t
E
d
i
t
o
r
,


 
 
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
,


 
 
u
s
e
S
t
e
p
P
l
a
y
e
r
,


 
 
V
a
r
i
a
b
l
e
s
P
a
n
e
l
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
a
l
g
o
"
;


i
m
p
o
r
t
 
{


 
 
C
a
l
l
o
u
t
,


 
 
C
a
r
d
,


 
 
L
e
d
e
,


 
 
P
i
l
l
B
u
t
t
o
n
,


 
 
S
e
c
t
i
o
n
E
y
e
b
r
o
w
,


 
 
S
e
c
t
i
o
n
T
i
t
l
e
,


 
 
S
u
b
H
e
a
d
i
n
g
,


 
 
T
H
E
M
E
,


}
 
f
r
o
m
 
"
.
.
/
.
.
/
.
.
/
.
.
/
.
.
/
c
o
m
p
o
n
e
n
t
s
/
d
s
a
-
t
h
e
o
r
y
/
p
r
i
m
i
t
i
v
e
s
"
;


i
m
p
o
r
t
 
{
 
P
r
a
c
t
i
c
e
T
a
b
 
}
 
f
r
o
m
 
"
.
.
/
P
r
a
c
t
i
c
e
T
a
b
"
;




c
o
n
s
t
 
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
=
 
"
l
i
n
k
e
d
-
l
i
s
t
"
;




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
y
p
e
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




t
y
p
e
 
O
p
 
=
 
"
h
e
a
d
"
 
|
 
"
i
n
s
e
r
t
"
 
|
 
"
d
e
l
e
t
e
"
;




i
n
t
e
r
f
a
c
e
 
N
o
d
e
V
i
e
w
 
{


 
 
i
d
:
 
s
t
r
i
n
g
;


 
 
v
a
l
u
e
:
 
n
u
m
b
e
r
;


 
 
s
t
a
t
e
?
:
 
"
d
e
f
a
u
l
t
"
 
|
 
"
a
c
t
i
v
e
"
 
|
 
"
n
e
w
"
 
|
 
"
d
e
l
e
t
e
d
"
;


}




i
n
t
e
r
f
a
c
e
 
F
r
a
m
e
 
{


 
 
l
i
n
e
:
 
n
u
m
b
e
r
;


 
 
v
a
r
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
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
 
u
n
d
e
f
i
n
e
d
>
;


 
 
m
e
s
s
a
g
e
:
 
s
t
r
i
n
g
;


 
 
h
i
g
h
l
i
g
h
t
K
e
y
?
:
 
s
t
r
i
n
g
;


 
 
n
o
d
e
s
:
 
N
o
d
e
V
i
e
w
[
]
;


 
 
h
e
a
d
I
d
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
c
u
r
s
o
r
I
d
?
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
;


 
 
p
e
n
d
i
n
g
N
e
w
?
:
 
{
 
i
d
:
 
s
t
r
i
n
g
;
 
v
a
l
u
e
:
 
n
u
m
b
e
r
;
 
a
t
:
 
n
u
m
b
e
r
 
}
 
|
 
n
u
l
l
;


 
 
e
d
g
e
H
i
g
h
l
i
g
h
t
s
?
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
"
n
e
w
"
 
|
 
"
d
e
l
e
t
e
d
"
>
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
F
r
a
m
e
 
b
u
i
l
d
e
r
s
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




c
o
n
s
t
 
P
S
E
U
D
O
_
H
E
A
D
 
=
 
[


 
 
"
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
s
e
r
t
A
t
H
e
a
d
(
h
e
a
d
,
 
v
a
l
u
e
)
:
"
,


 
 
"
 
 
n
o
d
e
 
←
 
n
e
w
 
N
o
d
e
(
v
a
l
u
e
)
"
,


 
 
"
 
 
n
o
d
e
.
n
e
x
t
 
←
 
h
e
a
d
"
,


 
 
"
 
 
h
e
a
d
 
←
 
n
o
d
e
"
,


 
 
"
 
 
r
e
t
u
r
n
 
h
e
a
d
"
,


]
;




c
o
n
s
t
 
P
S
E
U
D
O
_
I
N
S
E
R
T
 
=
 
[


 
 
"
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
s
e
r
t
A
t
(
h
e
a
d
,
 
k
,
 
v
a
l
u
e
)
:
"
,


 
 
"
 
 
i
f
 
k
 
=
=
 
0
:
 
r
e
t
u
r
n
 
i
n
s
e
r
t
A
t
H
e
a
d
(
h
e
a
d
,
 
v
a
l
u
e
)
"
,


 
 
"
 
 
c
u
r
 
←
 
h
e
a
d
;
 
i
 
←
 
0
"
,


 
 
"
 
 
w
h
i
l
e
 
c
u
r
.
n
e
x
t
 
!
=
 
n
u
l
l
 
a
n
d
 
i
 
<
 
k
-
1
:
"
,


 
 
"
 
 
 
 
c
u
r
 
←
 
c
u
r
.
n
e
x
t
;
 
i
 
←
 
i
 
+
 
1
"
,


 
 
"
 
 
n
o
d
e
 
←
 
n
e
w
 
N
o
d
e
(
v
a
l
u
e
)
"
,


 
 
"
 
 
n
o
d
e
.
n
e
x
t
 
←
 
c
u
r
.
n
e
x
t
"
,


 
 
"
 
 
c
u
r
.
n
e
x
t
 
←
 
n
o
d
e
"
,


 
 
"
 
 
r
e
t
u
r
n
 
h
e
a
d
"
,


]
;




c
o
n
s
t
 
P
S
E
U
D
O
_
D
E
L
E
T
E
 
=
 
[


 
 
"
f
u
n
c
t
i
o
n
 
d
e
l
e
t
e
A
t
(
h
e
a
d
,
 
k
)
:
"
,


 
 
"
 
 
i
f
 
k
 
=
=
 
0
:
 
h
e
a
d
 
←
 
h
e
a
d
.
n
e
x
t
;
 
r
e
t
u
r
n
 
h
e
a
d
"
,


 
 
"
 
 
c
u
r
 
←
 
h
e
a
d
;
 
i
 
←
 
0
"
,


 
 
"
 
 
w
h
i
l
e
 
c
u
r
.
n
e
x
t
 
!
=
 
n
u
l
l
 
a
n
d
 
i
 
<
 
k
-
1
:
"
,


 
 
"
 
 
 
 
c
u
r
 
←
 
c
u
r
.
n
e
x
t
;
 
i
 
←
 
i
 
+
 
1
"
,


 
 
"
 
 
i
f
 
c
u
r
.
n
e
x
t
 
=
=
 
n
u
l
l
:
 
r
e
t
u
r
n
 
h
e
a
d
"
,


 
 
"
 
 
c
u
r
.
n
e
x
t
 
←
 
c
u
r
.
n
e
x
t
.
n
e
x
t
"
,


 
 
"
 
 
r
e
t
u
r
n
 
h
e
a
d
"
,


]
;




l
e
t
 
_
_
i
d
c
 
=
 
0
;


c
o
n
s
t
 
n
i
d
 
=
 
(
p
 
=
 
"
n
"
)
 
=
>
 
`
$
{
p
}
$
{
+
+
_
_
i
d
c
}
`
;




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
(
v
a
l
u
e
s
:
 
n
u
m
b
e
r
[
]
)
:
 
{
 
n
o
d
e
s
:
 
N
o
d
e
V
i
e
w
[
]
;
 
h
e
a
d
I
d
:
 
s
t
r
i
n
g
 
|
 
n
u
l
l
 
}
 
{


 
 
_
_
i
d
c
 
=
 
0
;


 
 
c
o
n
s
t
 
n
o
d
e
s
 
=
 
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
v
)
 
=
>
 
(
{
 
i
d
:
 
n
i
d
(
)
,
 
v
a
l
u
e
:
 
v
 
}
)
)
;


 
 
r
e
t
u
r
n
 
{
 
n
o
d
e
s
,
 
h
e
a
d
I
d
:
 
n
o
d
e
s
[
0
]
?
.
i
d
 
?
?
 
n
u
l
l
 
}
;


}




f
u
n
c
t
i
o
n
 
b
u
i
l
d
H
e
a
d
(
v
a
l
u
e
s
:
 
n
u
m
b
e
r
[
]
,
 
n
e
w
V
a
l
:
 
n
u
m
b
e
r
)
:
 
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
{
 
n
o
d
e
s
,
 
h
e
a
d
I
d
 
}
 
=
 
i
n
i
t
i
a
l
(
v
a
l
u
e
s
)
;


 
 
c
o
n
s
t
 
f
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
v
a
l
u
e
:
 
n
e
w
V
a
l
,
 
h
e
a
d
:
 
h
e
a
d
I
d
 
?
 
n
o
d
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
 
:
 
"
n
u
l
l
"
 
}
,
 
m
e
s
s
a
g
e
:
 
`
I
n
s
e
r
t
 
$
{
n
e
w
V
a
l
}
 
a
t
 
h
e
a
d
`
,
 
n
o
d
e
s
,
 
h
e
a
d
I
d
 
}
)
;


 
 
c
o
n
s
t
 
n
e
w
N
o
d
e
:
 
N
o
d
e
V
i
e
w
 
=
 
{
 
i
d
:
 
n
i
d
(
)
,
 
v
a
l
u
e
:
 
n
e
w
V
a
l
,
 
s
t
a
t
e
:
 
"
n
e
w
"
 
}
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
v
a
l
u
e
:
 
n
e
w
V
a
l
,
 
n
e
w
N
o
d
e
:
 
n
e
w
V
a
l
 
}
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
n
e
w
N
o
d
e
"
,
 
m
e
s
s
a
g
e
:
 
`
A
l
l
o
c
a
t
e
 
n
e
w
 
n
o
d
e
 
w
i
t
h
 
v
a
l
u
e
 
$
{
n
e
w
V
a
l
}
`
,
 
n
o
d
e
s
,
 
h
e
a
d
I
d
,
 
p
e
n
d
i
n
g
N
e
w
:
 
{
 
i
d
:
 
n
e
w
N
o
d
e
.
i
d
,
 
v
a
l
u
e
:
 
n
e
w
V
a
l
,
 
a
t
:
 
-
1
 
}
 
}
)
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
v
a
l
u
e
:
 
n
e
w
V
a
l
,
 
"
n
e
w
N
o
d
e
.
n
e
x
t
"
:
 
h
e
a
d
I
d
 
?
 
n
o
d
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
 
:
 
"
n
u
l
l
"
 
}
,
 
m
e
s
s
a
g
e
:
 
"
P
o
i
n
t
 
n
e
w
N
o
d
e
.
n
e
x
t
 
a
t
 
c
u
r
r
e
n
t
 
h
e
a
d
"
,
 
n
o
d
e
s
,
 
h
e
a
d
I
d
,
 
p
e
n
d
i
n
g
N
e
w
:
 
{
 
i
d
:
 
n
e
w
N
o
d
e
.
i
d
,
 
v
a
l
u
e
:
 
n
e
w
V
a
l
,
 
a
t
:
 
-
1
 
}
,
 
e
d
g
e
H
i
g
h
l
i
g
h
t
s
:
 
{
 
[
`
$
{
n
e
w
N
o
d
e
.
i
d
}
-
>
$
{
h
e
a
d
I
d
 
?
?
 
"
n
u
l
l
"
}
`
]
:
 
"
n
e
w
"
 
}
 
}
)
;


 
 
c
o
n
s
t
 
n
o
d
e
s
2
 
=
 
[
n
e
w
N
o
d
e
,
 
.
.
.
n
o
d
e
s
]
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
h
e
a
d
:
 
n
e
w
V
a
l
 
}
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
h
e
a
d
"
,
 
m
e
s
s
a
g
e
:
 
"
M
o
v
e
 
h
e
a
d
 
p
o
i
n
t
e
r
 
t
o
 
n
e
w
 
n
o
d
e
"
,
 
n
o
d
e
s
:
 
n
o
d
e
s
2
,
 
h
e
a
d
I
d
:
 
n
e
w
N
o
d
e
.
i
d
 
}
)
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
{
 
h
e
a
d
:
 
n
e
w
V
a
l
 
}
,
 
m
e
s
s
a
g
e
:
 
"
D
o
n
e
,
 
O
(
1
)
 
i
n
s
e
r
t
i
o
n
 
a
t
 
h
e
a
d
"
,
 
n
o
d
e
s
:
 
n
o
d
e
s
2
.
m
a
p
(
(
n
)
 
=
>
 
(
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
u
n
d
e
f
i
n
e
d
 
}
)
)
,
 
h
e
a
d
I
d
:
 
n
e
w
N
o
d
e
.
i
d
 
}
)
;


 
 
r
e
t
u
r
n
 
f
;


}




f
u
n
c
t
i
o
n
 
b
u
i
l
d
I
n
s
e
r
t
(
v
a
l
u
e
s
:
 
n
u
m
b
e
r
[
]
,
 
k
:
 
n
u
m
b
e
r
,
 
n
e
w
V
a
l
:
 
n
u
m
b
e
r
)
:
 
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
{
 
n
o
d
e
s
,
 
h
e
a
d
I
d
 
}
 
=
 
i
n
i
t
i
a
l
(
v
a
l
u
e
s
)
;


 
 
c
o
n
s
t
 
f
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
k
,
 
v
a
l
u
e
:
 
n
e
w
V
a
l
 
}
,
 
m
e
s
s
a
g
e
:
 
`
I
n
s
e
r
t
 
$
{
n
e
w
V
a
l
}
 
a
t
 
p
o
s
i
t
i
o
n
 
$
{
k
}
`
,
 
n
o
d
e
s
,
 
h
e
a
d
I
d
 
}
)
;


 
 
i
f
 
(
k
 
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
 
b
u
i
l
d
H
e
a
d
(
v
a
l
u
e
s
,
 
n
e
w
V
a
l
)
;


 
 
i
f
 
(
!
h
e
a
d
I
d
 
|
|
 
k
 
>
 
n
o
d
e
s
.
l
e
n
g
t
h
)
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
k
,
 
v
a
l
u
e
:
 
n
e
w
V
a
l
 
}
,
 
m
e
s
s
a
g
e
:
 
`
P
o
s
i
t
i
o
n
 
$
{
k
}
 
i
s
 
o
u
t
 
o
f
 
r
a
n
g
e
,
 
c
l
a
m
p
i
n
g
`
,
 
n
o
d
e
s
,
 
h
e
a
d
I
d
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
f
;


 
 
}


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
k
 
}
,
 
m
e
s
s
a
g
e
:
 
"
k
 
≠
 
0
,
 
t
r
a
v
e
r
s
e
 
l
i
s
t
 
t
o
 
f
i
n
d
 
p
o
s
i
t
i
o
n
"
,
 
n
o
d
e
s
,
 
h
e
a
d
I
d
 
}
)
;


 
 
l
e
t
 
i
 
=
 
0
;


 
 
l
e
t
 
c
u
r
 
=
 
n
o
d
e
s
[
0
]
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
k
,
 
i
,
 
"
c
u
r
.
v
a
l
u
e
"
:
 
c
u
r
.
v
a
l
u
e
 
}
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
c
u
r
"
,
 
m
e
s
s
a
g
e
:
 
`
S
t
a
r
t
:
 
c
u
r
 
=
 
h
e
a
d
 
(
v
a
l
u
e
 
$
{
c
u
r
.
v
a
l
u
e
}
)
,
 
i
 
=
 
0
`
,
 
n
o
d
e
s
:
 
n
o
d
e
s
.
m
a
p
(
(
n
)
 
=
>
 
(
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
n
.
i
d
 
=
=
=
 
c
u
r
.
i
d
 
?
 
"
a
c
t
i
v
e
"
 
:
 
"
d
e
f
a
u
l
t
"
 
}
)
)
,
 
h
e
a
d
I
d
,
 
c
u
r
s
o
r
I
d
:
 
c
u
r
.
i
d
 
}
)
;


 
 
w
h
i
l
e
 
(
i
 
<
 
k
 
-
 
1
 
&
&
 
i
 
<
 
n
o
d
e
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
)
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
k
,
 
i
,
 
"
c
u
r
.
v
a
l
u
e
"
:
 
c
u
r
.
v
a
l
u
e
 
}
,
 
m
e
s
s
a
g
e
:
 
`
C
h
e
c
k
:
 
i
s
 
i
 
(
$
{
i
}
)
 
<
 
k
-
1
 
(
$
{
k
 
-
 
1
}
)
?
 
Y
e
s
,
 
a
d
v
a
n
c
e
`
,
 
n
o
d
e
s
:
 
n
o
d
e
s
.
m
a
p
(
(
n
)
 
=
>
 
(
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
n
.
i
d
 
=
=
=
 
c
u
r
.
i
d
 
?
 
"
a
c
t
i
v
e
"
 
:
 
"
d
e
f
a
u
l
t
"
 
}
)
)
,
 
h
e
a
d
I
d
,
 
c
u
r
s
o
r
I
d
:
 
c
u
r
.
i
d
 
}
)
;


 
 
 
 
c
u
r
 
=
 
n
o
d
e
s
[
i
 
+
 
1
]
;


 
 
 
 
i
+
+
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
{
 
k
,
 
i
,
 
"
c
u
r
.
v
a
l
u
e
"
:
 
c
u
r
.
v
a
l
u
e
 
}
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
c
u
r
"
,
 
m
e
s
s
a
g
e
:
 
`
W
a
l
k
e
d
 
o
n
e
 
s
t
e
p
:
 
c
u
r
 
=
 
$
{
c
u
r
.
v
a
l
u
e
}
,
 
i
 
=
 
$
{
i
}
`
,
 
n
o
d
e
s
:
 
n
o
d
e
s
.
m
a
p
(
(
n
)
 
=
>
 
(
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
n
.
i
d
 
=
=
=
 
c
u
r
.
i
d
 
?
 
"
a
c
t
i
v
e
"
 
:
 
"
d
e
f
a
u
l
t
"
 
}
)
)
,
 
h
e
a
d
I
d
,
 
c
u
r
s
o
r
I
d
:
 
c
u
r
.
i
d
 
}
)
;


 
 
}


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
k
,
 
i
,
 
"
c
u
r
.
v
a
l
u
e
"
:
 
c
u
r
.
v
a
l
u
e
 
}
,
 
m
e
s
s
a
g
e
:
 
`
i
 
=
 
k
-
1
 
=
 
$
{
i
}
,
 
s
t
o
p
,
 
w
e
'
r
e
 
a
t
 
p
r
e
d
e
c
e
s
s
o
r
 
o
f
 
p
o
s
i
t
i
o
n
 
$
{
k
}
`
,
 
n
o
d
e
s
:
 
n
o
d
e
s
.
m
a
p
(
(
n
)
 
=
>
 
(
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
n
.
i
d
 
=
=
=
 
c
u
r
.
i
d
 
?
 
"
a
c
t
i
v
e
"
 
:
 
"
d
e
f
a
u
l
t
"
 
}
)
)
,
 
h
e
a
d
I
d
,
 
c
u
r
s
o
r
I
d
:
 
c
u
r
.
i
d
 
}
)
;


 
 
c
o
n
s
t
 
n
e
w
N
o
d
e
:
 
N
o
d
e
V
i
e
w
 
=
 
{
 
i
d
:
 
n
i
d
(
)
,
 
v
a
l
u
e
:
 
n
e
w
V
a
l
,
 
s
t
a
t
e
:
 
"
n
e
w
"
 
}
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
5
,
 
v
a
r
s
:
 
{
 
n
e
w
N
o
d
e
:
 
n
e
w
V
a
l
 
}
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
n
e
w
N
o
d
e
"
,
 
m
e
s
s
a
g
e
:
 
`
A
l
l
o
c
a
t
e
 
n
e
w
 
n
o
d
e
 
(
$
{
n
e
w
V
a
l
}
)
 
a
b
o
v
e
 
p
o
s
i
t
i
o
n
`
,
 
n
o
d
e
s
:
 
n
o
d
e
s
.
m
a
p
(
(
n
)
 
=
>
 
(
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
n
.
i
d
 
=
=
=
 
c
u
r
.
i
d
 
?
 
"
a
c
t
i
v
e
"
 
:
 
"
d
e
f
a
u
l
t
"
 
}
)
)
,
 
h
e
a
d
I
d
,
 
c
u
r
s
o
r
I
d
:
 
c
u
r
.
i
d
,
 
p
e
n
d
i
n
g
N
e
w
:
 
{
 
i
d
:
 
n
e
w
N
o
d
e
.
i
d
,
 
v
a
l
u
e
:
 
n
e
w
V
a
l
,
 
a
t
:
 
i
 
}
 
}
)
;


 
 
c
o
n
s
t
 
n
e
x
t
 
=
 
n
o
d
e
s
[
i
 
+
 
1
]
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
6
,
 
v
a
r
s
:
 
{
 
"
n
e
w
N
o
d
e
.
n
e
x
t
"
:
 
n
e
x
t
 
?
 
n
e
x
t
.
v
a
l
u
e
 
:
 
"
n
u
l
l
"
 
}
,
 
m
e
s
s
a
g
e
:
 
`
R
e
w
i
r
e
:
 
n
e
w
N
o
d
e
.
n
e
x
t
 
←
 
c
u
r
.
n
e
x
t
 
(
$
{
n
e
x
t
 
?
 
n
e
x
t
.
v
a
l
u
e
 
:
 
"
n
u
l
l
"
}
)
`
,
 
n
o
d
e
s
:
 
n
o
d
e
s
.
m
a
p
(
(
n
)
 
=
>
 
(
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
n
.
i
d
 
=
=
=
 
c
u
r
.
i
d
 
?
 
"
a
c
t
i
v
e
"
 
:
 
"
d
e
f
a
u
l
t
"
 
}
)
)
,
 
h
e
a
d
I
d
,
 
c
u
r
s
o
r
I
d
:
 
c
u
r
.
i
d
,
 
p
e
n
d
i
n
g
N
e
w
:
 
{
 
i
d
:
 
n
e
w
N
o
d
e
.
i
d
,
 
v
a
l
u
e
:
 
n
e
w
V
a
l
,
 
a
t
:
 
i
 
}
,
 
e
d
g
e
H
i
g
h
l
i
g
h
t
s
:
 
{
 
[
`
$
{
n
e
w
N
o
d
e
.
i
d
}
-
>
$
{
n
e
x
t
?
.
i
d
 
?
?
 
"
n
u
l
l
"
}
`
]
:
 
"
n
e
w
"
 
}
 
}
)
;


 
 
c
o
n
s
t
 
n
o
d
e
s
2
 
=
 
[
.
.
.
n
o
d
e
s
.
s
l
i
c
e
(
0
,
 
i
 
+
 
1
)
,
 
n
e
w
N
o
d
e
,
 
.
.
.
n
o
d
e
s
.
s
l
i
c
e
(
i
 
+
 
1
)
]
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
7
,
 
v
a
r
s
:
 
{
 
"
c
u
r
.
n
e
x
t
"
:
 
n
e
w
V
a
l
 
}
,
 
m
e
s
s
a
g
e
:
 
"
R
e
w
i
r
e
:
 
c
u
r
.
n
e
x
t
 
←
 
n
e
w
N
o
d
e
,
 
i
n
s
e
r
t
i
o
n
 
c
o
m
p
l
e
t
e
"
,
 
n
o
d
e
s
:
 
n
o
d
e
s
2
.
m
a
p
(
(
n
)
 
=
>
 
(
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
n
.
i
d
 
=
=
=
 
n
e
w
N
o
d
e
.
i
d
 
?
 
"
n
e
w
"
 
:
 
n
.
i
d
 
=
=
=
 
c
u
r
.
i
d
 
?
 
"
a
c
t
i
v
e
"
 
:
 
"
d
e
f
a
u
l
t
"
 
}
)
)
,
 
h
e
a
d
I
d
,
 
e
d
g
e
H
i
g
h
l
i
g
h
t
s
:
 
{
 
[
`
$
{
c
u
r
.
i
d
}
-
>
$
{
n
e
w
N
o
d
e
.
i
d
}
`
]
:
 
"
n
e
w
"
 
}
 
}
)
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
8
,
 
v
a
r
s
:
 
{
}
,
 
m
e
s
s
a
g
e
:
 
"
D
o
n
e
"
,
 
n
o
d
e
s
:
 
n
o
d
e
s
2
.
m
a
p
(
(
n
)
 
=
>
 
(
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
u
n
d
e
f
i
n
e
d
 
}
)
)
,
 
h
e
a
d
I
d
 
}
)
;


 
 
r
e
t
u
r
n
 
f
;


}




f
u
n
c
t
i
o
n
 
b
u
i
l
d
D
e
l
e
t
e
(
v
a
l
u
e
s
:
 
n
u
m
b
e
r
[
]
,
 
k
:
 
n
u
m
b
e
r
)
:
 
F
r
a
m
e
[
]
 
{


 
 
c
o
n
s
t
 
{
 
n
o
d
e
s
,
 
h
e
a
d
I
d
 
}
 
=
 
i
n
i
t
i
a
l
(
v
a
l
u
e
s
)
;


 
 
c
o
n
s
t
 
f
:
 
F
r
a
m
e
[
]
 
=
 
[
]
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
k
 
}
,
 
m
e
s
s
a
g
e
:
 
`
D
e
l
e
t
e
 
n
o
d
e
 
a
t
 
p
o
s
i
t
i
o
n
 
$
{
k
}
`
,
 
n
o
d
e
s
,
 
h
e
a
d
I
d
 
}
)
;


 
 
i
f
 
(
!
h
e
a
d
I
d
 
|
|
 
k
 
>
=
 
n
o
d
e
s
.
l
e
n
g
t
h
)
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
0
,
 
v
a
r
s
:
 
{
 
k
 
}
,
 
m
e
s
s
a
g
e
:
 
`
P
o
s
i
t
i
o
n
 
$
{
k
}
 
o
u
t
 
o
f
 
r
a
n
g
e
`
,
 
n
o
d
e
s
,
 
h
e
a
d
I
d
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
f
;


 
 
}


 
 
i
f
 
(
k
 
=
=
=
 
0
)
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
k
 
}
,
 
m
e
s
s
a
g
e
:
 
"
k
 
=
=
 
0
,
 
a
d
v
a
n
c
e
 
h
e
a
d
 
t
o
 
h
e
a
d
.
n
e
x
t
"
,
 
n
o
d
e
s
:
 
n
o
d
e
s
.
m
a
p
(
(
n
,
 
i
)
 
=
>
 
(
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
i
 
=
=
=
 
0
 
?
 
"
d
e
l
e
t
e
d
"
 
:
 
"
d
e
f
a
u
l
t
"
 
}
)
)
,
 
h
e
a
d
I
d
 
}
)
;


 
 
 
 
c
o
n
s
t
 
n
o
d
e
s
2
 
=
 
n
o
d
e
s
.
s
l
i
c
e
(
1
)
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
1
,
 
v
a
r
s
:
 
{
 
h
e
a
d
:
 
n
o
d
e
s
2
[
0
]
?
.
v
a
l
u
e
 
?
?
 
"
n
u
l
l
"
 
}
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
h
e
a
d
"
,
 
m
e
s
s
a
g
e
:
 
`
O
l
d
 
h
e
a
d
 
r
e
m
o
v
e
d
,
 
n
e
w
 
h
e
a
d
 
=
 
$
{
n
o
d
e
s
2
[
0
]
?
.
v
a
l
u
e
 
?
?
 
"
n
u
l
l
"
}
`
,
 
n
o
d
e
s
:
 
n
o
d
e
s
2
,
 
h
e
a
d
I
d
:
 
n
o
d
e
s
2
[
0
]
?
.
i
d
 
?
?
 
n
u
l
l
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
f
;


 
 
}


 
 
l
e
t
 
i
 
=
 
0
;


 
 
l
e
t
 
c
u
r
 
=
 
n
o
d
e
s
[
0
]
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
2
,
 
v
a
r
s
:
 
{
 
k
,
 
i
,
 
"
c
u
r
.
v
a
l
u
e
"
:
 
c
u
r
.
v
a
l
u
e
 
}
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
c
u
r
"
,
 
m
e
s
s
a
g
e
:
 
"
S
t
a
r
t
:
 
c
u
r
 
=
 
h
e
a
d
,
 
i
 
=
 
0
"
,
 
n
o
d
e
s
:
 
n
o
d
e
s
.
m
a
p
(
(
n
)
 
=
>
 
(
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
n
.
i
d
 
=
=
=
 
c
u
r
.
i
d
 
?
 
"
a
c
t
i
v
e
"
 
:
 
"
d
e
f
a
u
l
t
"
 
}
)
)
,
 
h
e
a
d
I
d
,
 
c
u
r
s
o
r
I
d
:
 
c
u
r
.
i
d
 
}
)
;


 
 
w
h
i
l
e
 
(
i
 
<
 
k
 
-
 
1
 
&
&
 
i
 
<
 
n
o
d
e
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
)
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
3
,
 
v
a
r
s
:
 
{
 
k
,
 
i
,
 
"
c
u
r
.
v
a
l
u
e
"
:
 
c
u
r
.
v
a
l
u
e
 
}
,
 
m
e
s
s
a
g
e
:
 
`
i
 
(
$
{
i
}
)
 
<
 
k
-
1
 
(
$
{
k
 
-
 
1
}
)
?
 
Y
e
s
,
 
a
d
v
a
n
c
e
`
,
 
n
o
d
e
s
:
 
n
o
d
e
s
.
m
a
p
(
(
n
)
 
=
>
 
(
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
n
.
i
d
 
=
=
=
 
c
u
r
.
i
d
 
?
 
"
a
c
t
i
v
e
"
 
:
 
"
d
e
f
a
u
l
t
"
 
}
)
)
,
 
h
e
a
d
I
d
,
 
c
u
r
s
o
r
I
d
:
 
c
u
r
.
i
d
 
}
)
;


 
 
 
 
c
u
r
 
=
 
n
o
d
e
s
[
i
 
+
 
1
]
;


 
 
 
 
i
+
+
;


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
4
,
 
v
a
r
s
:
 
{
 
k
,
 
i
,
 
"
c
u
r
.
v
a
l
u
e
"
:
 
c
u
r
.
v
a
l
u
e
 
}
,
 
h
i
g
h
l
i
g
h
t
K
e
y
:
 
"
c
u
r
"
,
 
m
e
s
s
a
g
e
:
 
`
c
u
r
 
=
 
$
{
c
u
r
.
v
a
l
u
e
}
,
 
i
 
=
 
$
{
i
}
`
,
 
n
o
d
e
s
:
 
n
o
d
e
s
.
m
a
p
(
(
n
)
 
=
>
 
(
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
n
.
i
d
 
=
=
=
 
c
u
r
.
i
d
 
?
 
"
a
c
t
i
v
e
"
 
:
 
"
d
e
f
a
u
l
t
"
 
}
)
)
,
 
h
e
a
d
I
d
,
 
c
u
r
s
o
r
I
d
:
 
c
u
r
.
i
d
 
}
)
;


 
 
}


 
 
c
o
n
s
t
 
t
a
r
g
e
t
 
=
 
n
o
d
e
s
[
i
 
+
 
1
]
;


 
 
i
f
 
(
!
t
a
r
g
e
t
)
 
{


 
 
 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
5
,
 
v
a
r
s
:
 
{
}
,
 
m
e
s
s
a
g
e
:
 
"
c
u
r
.
n
e
x
t
 
i
s
 
n
u
l
l
,
 
n
o
t
h
i
n
g
 
t
o
 
d
e
l
e
t
e
"
,
 
n
o
d
e
s
,
 
h
e
a
d
I
d
 
}
)
;


 
 
 
 
r
e
t
u
r
n
 
f
;


 
 
}


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
6
,
 
v
a
r
s
:
 
{
 
"
c
u
r
.
n
e
x
t
"
:
 
t
a
r
g
e
t
.
v
a
l
u
e
,
 
"
t
a
r
g
e
t
.
n
e
x
t
"
:
 
n
o
d
e
s
[
i
 
+
 
2
]
?
.
v
a
l
u
e
 
?
?
 
"
n
u
l
l
"
 
}
,
 
m
e
s
s
a
g
e
:
 
`
R
e
w
i
r
e
:
 
c
u
r
.
n
e
x
t
 
←
 
t
a
r
g
e
t
.
n
e
x
t
 
(
s
k
i
p
 
o
v
e
r
 
$
{
t
a
r
g
e
t
.
v
a
l
u
e
}
)
`
,
 
n
o
d
e
s
:
 
n
o
d
e
s
.
m
a
p
(
(
n
)
 
=
>
 
(
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
n
.
i
d
 
=
=
=
 
t
a
r
g
e
t
.
i
d
 
?
 
"
d
e
l
e
t
e
d
"
 
:
 
n
.
i
d
 
=
=
=
 
c
u
r
.
i
d
 
?
 
"
a
c
t
i
v
e
"
 
:
 
"
d
e
f
a
u
l
t
"
 
}
)
)
,
 
h
e
a
d
I
d
,
 
c
u
r
s
o
r
I
d
:
 
c
u
r
.
i
d
,
 
e
d
g
e
H
i
g
h
l
i
g
h
t
s
:
 
{
 
[
`
$
{
c
u
r
.
i
d
}
-
>
$
{
n
o
d
e
s
[
i
 
+
 
2
]
?
.
i
d
 
?
?
 
"
n
u
l
l
"
}
`
]
:
 
"
n
e
w
"
,
 
[
`
$
{
c
u
r
.
i
d
}
-
>
$
{
t
a
r
g
e
t
.
i
d
}
`
]
:
 
"
d
e
l
e
t
e
d
"
 
}
 
}
)
;


 
 
c
o
n
s
t
 
n
o
d
e
s
2
 
=
 
[
.
.
.
n
o
d
e
s
.
s
l
i
c
e
(
0
,
 
i
 
+
 
1
)
,
 
.
.
.
n
o
d
e
s
.
s
l
i
c
e
(
i
 
+
 
2
)
]
;


 
 
f
.
p
u
s
h
(
{
 
l
i
n
e
:
 
7
,
 
v
a
r
s
:
 
{
}
,
 
m
e
s
s
a
g
e
:
 
`
N
o
d
e
 
$
{
t
a
r
g
e
t
.
v
a
l
u
e
}
 
r
e
m
o
v
e
d
`
,
 
n
o
d
e
s
:
 
n
o
d
e
s
2
.
m
a
p
(
(
n
)
 
=
>
 
(
{
 
.
.
.
n
,
 
s
t
a
t
e
:
 
u
n
d
e
f
i
n
e
d
 
}
)
)
,
 
h
e
a
d
I
d
 
}
)
;


 
 
r
e
t
u
r
n
 
f
;


}




f
u
n
c
t
i
o
n
 
p
a
r
s
e
L
i
s
t
(
s
:
 
s
t
r
i
n
g
)
:
 
n
u
m
b
e
r
[
]
 
{


 
 
r
e
t
u
r
n
 
s
.
s
p
l
i
t
(
/
[
,
\
s
]
+
/
)
.
m
a
p
(
(
x
)
 
=
>
 
N
u
m
b
e
r
(
x
.
t
r
i
m
(
)
)
)
.
f
i
l
t
e
r
(
(
x
)
 
=
>
 
!
N
u
m
b
e
r
.
i
s
N
a
N
(
x
)
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
i
n
k
e
d
 
l
i
s
t
 
S
V
G
 
v
i
z
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
i
n
k
e
d
L
i
s
t
V
i
z
(
{
 
f
r
a
m
e
 
}
:
 
{
 
f
r
a
m
e
:
 
F
r
a
m
e
 
}
)
 
{


 
 
c
o
n
s
t
 
N
O
D
E
_
W
 
=
 
9
0
,
 
N
O
D
E
_
H
 
=
 
5
2
,
 
G
A
P
 
=
 
4
4
,
 
T
O
P
 
=
 
7
0
;


 
 
c
o
n
s
t
 
n
o
d
e
s
 
=
 
f
r
a
m
e
.
n
o
d
e
s
;


 
 
c
o
n
s
t
 
p
o
s
i
t
i
o
n
s
:
 
R
e
c
o
r
d
<
s
t
r
i
n
g
,
 
{
 
x
:
 
n
u
m
b
e
r
;
 
y
:
 
n
u
m
b
e
r
 
}
>
 
=
 
{
}
;


 
 
n
o
d
e
s
.
f
o
r
E
a
c
h
(
(
n
,
 
i
)
 
=
>
 
{
 
p
o
s
i
t
i
o
n
s
[
n
.
i
d
]
 
=
 
{
 
x
:
 
4
0
 
+
 
i
 
*
 
(
N
O
D
E
_
W
 
+
 
G
A
P
)
,
 
y
:
 
T
O
P
 
}
;
 
}
)
;


 
 
i
f
 
(
f
r
a
m
e
.
p
e
n
d
i
n
g
N
e
w
)
 
{


 
 
 
 
c
o
n
s
t
 
a
t
 
=
 
f
r
a
m
e
.
p
e
n
d
i
n
g
N
e
w
.
a
t
;


 
 
 
 
c
o
n
s
t
 
i
n
s
e
r
t
I
d
x
 
=
 
a
t
 
+
 
1
;


 
 
 
 
c
o
n
s
t
 
p
x
 
=
 
a
t
 
<
 
0
 
?
 
4
0
 
-
 
N
O
D
E
_
W
 
/
 
2
 
:
 
4
0
 
+
 
i
n
s
e
r
t
I
d
x
 
*
 
(
N
O
D
E
_
W
 
+
 
G
A
P
)
 
-
 
G
A
P
 
/
 
2
 
-
 
N
O
D
E
_
W
 
/
 
2
;


 
 
 
 
p
o
s
i
t
i
o
n
s
[
f
r
a
m
e
.
p
e
n
d
i
n
g
N
e
w
.
i
d
]
 
=
 
{
 
x
:
 
p
x
,
 
y
:
 
8
 
}
;


 
 
}


 
 
c
o
n
s
t
 
w
i
d
t
h
 
=
 
M
a
t
h
.
m
a
x
(
5
0
0
,
 
8
0
 
+
 
n
o
d
e
s
.
l
e
n
g
t
h
 
*
 
(
N
O
D
E
_
W
 
+
 
G
A
P
)
)
;




 
 
c
o
n
s
t
 
n
o
d
e
C
o
l
o
r
 
=
 
(
s
t
?
:
 
N
o
d
e
V
i
e
w
[
"
s
t
a
t
e
"
]
)
 
=
>


 
 
 
 
s
t
 
=
=
=
 
"
a
c
t
i
v
e
"
 
?
 
"
#
3
b
8
2
f
6
"
 
:
 
s
t
 
=
=
=
 
"
n
e
w
"
 
?
 
"
#
1
0
b
9
8
1
"
 
:
 
s
t
 
=
=
=
 
"
d
e
l
e
t
e
d
"
 
?
 
"
#
e
f
4
4
4
4
"
 
:
 
T
H
E
M
E
.
a
c
c
e
n
t
;


 
 
c
o
n
s
t
 
n
o
d
e
B
g
 
=
 
(
s
t
?
:
 
N
o
d
e
V
i
e
w
[
"
s
t
a
t
e
"
]
)
 
=
>


 
 
 
 
s
t
 
=
=
=
 
"
a
c
t
i
v
e
"
 
?
 
"
r
g
b
a
(
5
9
,
1
3
0
,
2
4
6
,
0
.
1
2
)
"
 
:
 
s
t
 
=
=
=
 
"
n
e
w
"
 
?
 
"
r
g
b
a
(
1
6
,
1
8
5
,
1
2
9
,
0
.
1
4
)
"
 
:
 
s
t
 
=
=
=
 
"
d
e
l
e
t
e
d
"
 
?
 
"
r
g
b
a
(
2
3
9
,
6
8
,
6
8
,
0
.
1
4
)
"
 
:
 
T
H
E
M
E
.
b
g
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
o
v
e
r
f
l
o
w
-
x
-
a
u
t
o
"
>


 
 
 
 
 
 
<
s
v
g
 
w
i
d
t
h
=
{
w
i
d
t
h
}
 
h
e
i
g
h
t
=
{
1
7
0
}
 
s
t
y
l
e
=
{
{
 
d
i
s
p
l
a
y
:
 
"
b
l
o
c
k
"
,
 
m
a
r
g
i
n
:
 
"
0
 
a
u
t
o
"
,
 
m
i
n
W
i
d
t
h
:
 
w
i
d
t
h
 
}
}
>


 
 
 
 
 
 
 
 
<
d
e
f
s
>


 
 
 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
a
r
r
o
w
-
l
l
"
 
v
i
e
w
B
o
x
=
"
0
 
0
 
1
0
 
1
0
"
 
r
e
f
X
=
"
9
"
 
r
e
f
Y
=
"
5
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
7
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
7
"
 
o
r
i
e
n
t
=
"
a
u
t
o
-
s
t
a
r
t
-
r
e
v
e
r
s
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
1
0
,
5
 
L
0
,
1
0
 
z
"
 
f
i
l
l
=
{
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
a
r
r
o
w
-
l
l
-
n
e
w
"
 
v
i
e
w
B
o
x
=
"
0
 
0
 
1
0
 
1
0
"
 
r
e
f
X
=
"
9
"
 
r
e
f
Y
=
"
5
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
7
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
7
"
 
o
r
i
e
n
t
=
"
a
u
t
o
-
s
t
a
r
t
-
r
e
v
e
r
s
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
1
0
,
5
 
L
0
,
1
0
 
z
"
 
f
i
l
l
=
"
#
1
0
b
9
8
1
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
 
 
<
m
a
r
k
e
r
 
i
d
=
"
a
r
r
o
w
-
l
l
-
d
e
l
"
 
v
i
e
w
B
o
x
=
"
0
 
0
 
1
0
 
1
0
"
 
r
e
f
X
=
"
9
"
 
r
e
f
Y
=
"
5
"
 
m
a
r
k
e
r
W
i
d
t
h
=
"
7
"
 
m
a
r
k
e
r
H
e
i
g
h
t
=
"
7
"
 
o
r
i
e
n
t
=
"
a
u
t
o
-
s
t
a
r
t
-
r
e
v
e
r
s
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
p
a
t
h
 
d
=
"
M
0
,
0
 
L
1
0
,
5
 
L
0
,
1
0
 
z
"
 
f
i
l
l
=
"
#
e
f
4
4
4
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
m
a
r
k
e
r
>


 
 
 
 
 
 
 
 
<
/
d
e
f
s
>




 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
h
e
a
d
I
d
 
&
&
 
p
o
s
i
t
i
o
n
s
[
f
r
a
m
e
.
h
e
a
d
I
d
]
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
g
>


 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
p
o
s
i
t
i
o
n
s
[
f
r
a
m
e
.
h
e
a
d
I
d
]
.
x
 
+
 
N
O
D
E
_
W
 
/
 
2
}
 
y
=
{
5
0
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
1
2
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
f
i
l
l
:
 
T
H
E
M
E
.
a
c
c
e
n
t
,
 
f
o
n
t
F
a
m
i
l
y
:
 
T
H
E
M
E
.
h
e
a
d
i
n
g
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
h
e
a
d


 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
p
o
s
i
t
i
o
n
s
[
f
r
a
m
e
.
h
e
a
d
I
d
]
.
x
 
+
 
N
O
D
E
_
W
 
/
 
2
}
 
y
1
=
{
5
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
p
o
s
i
t
i
o
n
s
[
f
r
a
m
e
.
h
e
a
d
I
d
]
.
x
 
+
 
N
O
D
E
_
W
 
/
 
2
}
 
y
2
=
{
T
O
P
 
-
 
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
T
H
E
M
E
.
a
c
c
e
n
t
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
2
}
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
a
r
r
o
w
-
l
l
)
"
 
/
>


 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
n
o
d
e
s
.
m
a
p
(
(
n
,
 
i
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
n
x
t
 
=
 
n
o
d
e
s
[
i
 
+
 
1
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
k
e
y
 
=
 
`
$
{
n
.
i
d
}
-
>
$
{
n
x
t
?
.
i
d
 
?
?
 
"
n
u
l
l
"
}
`
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
h
i
 
=
 
f
r
a
m
e
.
e
d
g
e
H
i
g
h
l
i
g
h
t
s
?
.
[
k
e
y
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
s
t
r
o
k
e
 
=
 
h
i
 
=
=
=
 
"
n
e
w
"
 
?
 
"
#
1
0
b
9
8
1
"
 
:
 
h
i
 
=
=
=
 
"
d
e
l
e
t
e
d
"
 
?
 
"
#
e
f
4
4
4
4
"
 
:
 
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
m
a
r
k
e
r
 
=
 
h
i
 
=
=
=
 
"
n
e
w
"
 
?
 
"
u
r
l
(
#
a
r
r
o
w
-
l
l
-
n
e
w
)
"
 
:
 
h
i
 
=
=
=
 
"
d
e
l
e
t
e
d
"
 
?
 
"
u
r
l
(
#
a
r
r
o
w
-
l
l
-
d
e
l
)
"
 
:
 
"
u
r
l
(
#
a
r
r
o
w
-
l
l
)
"
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
o
p
a
c
i
t
y
 
=
 
h
i
 
=
=
=
 
"
d
e
l
e
t
e
d
"
 
?
 
0
.
6
 
:
 
1
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
d
a
s
h
 
=
 
h
i
 
=
=
=
 
"
d
e
l
e
t
e
d
"
 
?
 
"
4
 
3
"
 
:
 
u
n
d
e
f
i
n
e
d
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
1
 
=
 
p
o
s
i
t
i
o
n
s
[
n
.
i
d
]
.
x
 
+
 
N
O
D
E
_
W
 
-
 
1
4
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
1
 
=
 
p
o
s
i
t
i
o
n
s
[
n
.
i
d
]
.
y
 
+
 
N
O
D
E
_
H
 
/
 
2
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
x
2
 
=
 
n
x
t
 
?
 
p
o
s
i
t
i
o
n
s
[
n
x
t
.
i
d
]
.
x
 
:
 
p
o
s
i
t
i
o
n
s
[
n
.
i
d
]
.
x
 
+
 
N
O
D
E
_
W
 
+
 
G
A
P
 
-
 
1
0
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
2
 
=
 
y
1
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
k
e
y
=
{
k
e
y
}
 
x
1
=
{
x
1
}
 
y
1
=
{
y
1
}
 
x
2
=
{
x
2
}
 
y
2
=
{
y
2
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
s
t
r
o
k
e
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
2
}
 
s
t
r
o
k
e
D
a
s
h
a
r
r
a
y
=
{
d
a
s
h
}
 
m
a
r
k
e
r
E
n
d
=
{
m
a
r
k
e
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
p
a
c
i
t
y
=
{
o
p
a
c
i
t
y
}
 
s
t
y
l
e
=
{
{
 
t
r
a
n
s
i
t
i
o
n
:
 
"
a
l
l
 
0
.
3
s
"
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
 
 
{
n
o
d
e
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
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
p
o
s
i
t
i
o
n
s
[
n
o
d
e
s
[
n
o
d
e
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
.
i
d
]
.
x
 
+
 
N
O
D
E
_
W
 
+
 
G
A
P
 
-
 
4
}


 
 
 
 
 
 
 
 
 
 
 
 
y
=
{
p
o
s
i
t
i
o
n
s
[
n
o
d
e
s
[
n
o
d
e
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
.
i
d
]
.
y
 
+
 
N
O
D
E
_
H
 
/
 
2
 
+
 
4
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
1
1
,
 
f
i
l
l
:
 
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
,
 
f
o
n
t
F
a
m
i
l
y
:
 
T
H
E
M
E
.
m
o
n
o
 
}
}
>
∅
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
p
e
n
d
i
n
g
N
e
w
 
&
&
 
(
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
 
p
 
=
 
p
o
s
i
t
i
o
n
s
[
f
r
a
m
e
.
p
e
n
d
i
n
g
N
e
w
!
.
i
d
]
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
a
r
g
e
t
 
=
 
f
r
a
m
e
.
p
e
n
d
i
n
g
N
e
w
!
.
a
t
 
<
 
0
 
?
 
f
r
a
m
e
.
h
e
a
d
I
d
 
:
 
n
o
d
e
s
[
f
r
a
m
e
.
p
e
n
d
i
n
g
N
e
w
!
.
a
t
 
+
 
1
]
?
.
i
d
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
k
e
y
 
=
 
`
$
{
f
r
a
m
e
.
p
e
n
d
i
n
g
N
e
w
!
.
i
d
}
-
>
$
{
t
a
r
g
e
t
 
?
?
 
"
n
u
l
l
"
}
`
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
h
i
 
=
 
f
r
a
m
e
.
e
d
g
e
H
i
g
h
l
i
g
h
t
s
?
.
[
k
e
y
]
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
h
i
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
t
p
o
s
 
=
 
t
a
r
g
e
t
 
?
 
p
o
s
i
t
i
o
n
s
[
t
a
r
g
e
t
]
 
:
 
n
u
l
l
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
p
.
x
 
+
 
N
O
D
E
_
W
 
-
 
1
4
}
 
y
1
=
{
p
.
y
 
+
 
N
O
D
E
_
H
 
-
 
4
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
x
2
=
{
t
p
o
s
 
?
 
t
p
o
s
.
x
 
+
 
4
 
:
 
p
.
x
 
+
 
N
O
D
E
_
W
 
+
 
2
0
}
 
y
2
=
{
t
p
o
s
 
?
 
t
p
o
s
.
y
 
+
 
2
 
:
 
p
.
y
 
+
 
N
O
D
E
_
H
 
+
 
3
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
"
#
1
0
b
9
8
1
"
 
s
t
r
o
k
e
W
i
d
t
h
=
{
2
}
 
m
a
r
k
e
r
E
n
d
=
"
u
r
l
(
#
a
r
r
o
w
-
l
l
-
n
e
w
)
"
 
s
t
y
l
e
=
{
{
 
t
r
a
n
s
i
t
i
o
n
:
 
"
a
l
l
 
0
.
3
s
"
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
(
)
}




 
 
 
 
 
 
 
 
{
[
.
.
.
n
o
d
e
s
,
 
.
.
.
(
f
r
a
m
e
.
p
e
n
d
i
n
g
N
e
w
 
?
 
[
{
 
i
d
:
 
f
r
a
m
e
.
p
e
n
d
i
n
g
N
e
w
.
i
d
,
 
v
a
l
u
e
:
 
f
r
a
m
e
.
p
e
n
d
i
n
g
N
e
w
.
v
a
l
u
e
,
 
s
t
a
t
e
:
 
"
n
e
w
"
 
a
s
 
c
o
n
s
t
 
}
]
 
:
 
[
]
)
]
.
m
a
p
(
(
n
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
p
 
=
 
p
o
s
i
t
i
o
n
s
[
n
.
i
d
]
;


 
 
 
 
 
 
 
 
 
 
i
f
 
(
!
p
)
 
r
e
t
u
r
n
 
n
u
l
l
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
g
 
k
e
y
=
{
n
.
i
d
}
 
s
t
y
l
e
=
{
{
 
t
r
a
n
s
i
t
i
o
n
:
 
"
t
r
a
n
s
f
o
r
m
 
0
.
3
s
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
r
e
c
t
 
x
=
{
p
.
x
}
 
y
=
{
p
.
y
}
 
w
i
d
t
h
=
{
N
O
D
E
_
W
}
 
h
e
i
g
h
t
=
{
N
O
D
E
_
H
}
 
r
x
=
{
8
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
n
o
d
e
B
g
(
n
.
s
t
a
t
e
)
}
 
s
t
r
o
k
e
=
{
n
o
d
e
C
o
l
o
r
(
n
.
s
t
a
t
e
)
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
2
.
2
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
p
.
x
 
+
 
N
O
D
E
_
W
 
-
 
2
4
}
 
y
1
=
{
p
.
y
}
 
x
2
=
{
p
.
x
 
+
 
N
O
D
E
_
W
 
-
 
2
4
}
 
y
2
=
{
p
.
y
 
+
 
N
O
D
E
_
H
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
o
k
e
=
{
n
o
d
e
C
o
l
o
r
(
n
.
s
t
a
t
e
)
}
 
s
t
r
o
k
e
W
i
d
t
h
=
{
1
.
2
}
 
o
p
a
c
i
t
y
=
{
0
.
5
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
p
.
x
 
+
 
(
N
O
D
E
_
W
 
-
 
2
4
)
 
/
 
2
}
 
y
=
{
p
.
y
 
+
 
N
O
D
E
_
H
 
/
 
2
 
+
 
5
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
1
5
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
f
i
l
l
:
 
T
H
E
M
E
.
t
e
x
t
,
 
f
o
n
t
F
a
m
i
l
y
:
 
T
H
E
M
E
.
m
o
n
o
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
.
v
a
l
u
e
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
p
.
x
 
+
 
N
O
D
E
_
W
 
-
 
1
2
}
 
y
=
{
p
.
y
 
+
 
N
O
D
E
_
H
 
/
 
2
 
+
 
4
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
1
0
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
f
i
l
l
:
 
T
H
E
M
E
.
t
e
x
t
M
u
t
e
d
,
 
f
o
n
t
F
a
m
i
l
y
:
 
T
H
E
M
E
.
m
o
n
o
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
•


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
f
r
a
m
e
.
c
u
r
s
o
r
I
d
 
=
=
=
 
n
.
i
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
t
e
x
t
 
x
=
{
p
.
x
 
+
 
N
O
D
E
_
W
 
/
 
2
}
 
y
=
{
p
.
y
 
+
 
N
O
D
E
_
H
 
+
 
2
0
}
 
t
e
x
t
A
n
c
h
o
r
=
"
m
i
d
d
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
f
o
n
t
S
i
z
e
:
 
1
1
,
 
f
o
n
t
W
e
i
g
h
t
:
 
7
0
0
,
 
f
i
l
l
:
 
"
#
3
b
8
2
f
6
"
,
 
f
o
n
t
F
a
m
i
l
y
:
 
T
H
E
M
E
.
h
e
a
d
i
n
g
 
}
}
>
c
u
r
<
/
t
e
x
t
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
p
o
l
y
g
o
n
 
p
o
i
n
t
s
=
{
`
$
{
p
.
x
 
+
 
N
O
D
E
_
W
 
/
 
2
 
-
 
5
}
,
$
{
p
.
y
 
+
 
N
O
D
E
_
H
 
+
 
6
}
 
$
{
p
.
x
 
+
 
N
O
D
E
_
W
 
/
 
2
 
+
 
5
}
,
$
{
p
.
y
 
+
 
N
O
D
E
_
H
 
+
 
6
}
 
$
{
p
.
x
 
+
 
N
O
D
E
_
W
 
/
 
2
}
,
$
{
p
.
y
 
+
 
N
O
D
E
_
H
 
+
 
1
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
"
#
3
b
8
2
f
6
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
g
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
<
/
s
v
g
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
V
i
s
u
a
l
i
z
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
V
i
s
u
a
l
i
z
e
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
[
o
p
,
 
s
e
t
O
p
]
 
=
 
u
s
e
S
t
a
t
e
<
O
p
>
(
"
i
n
s
e
r
t
"
)
;


 
 
c
o
n
s
t
 
[
l
i
s
t
S
t
r
,
 
s
e
t
L
i
s
t
S
t
r
]
 
=
 
u
s
e
S
t
a
t
e
(
"
1
0
,
 
2
0
,
 
3
0
,
 
4
0
"
)
;


 
 
c
o
n
s
t
 
[
a
r
g
,
 
s
e
t
A
r
g
]
 
=
 
u
s
e
S
t
a
t
e
(
"
2
"
)
;


 
 
c
o
n
s
t
 
[
v
a
l
,
 
s
e
t
V
a
l
]
 
=
 
u
s
e
S
t
a
t
e
(
"
9
9
"
)
;




 
 
c
o
n
s
t
 
f
r
a
m
e
s
 
=
 
u
s
e
M
e
m
o
(
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
 
v
a
l
u
e
s
 
=
 
p
a
r
s
e
L
i
s
t
(
l
i
s
t
S
t
r
)
;


 
 
 
 
i
f
 
(
o
p
 
=
=
=
 
"
h
e
a
d
"
)
 
r
e
t
u
r
n
 
b
u
i
l
d
H
e
a
d
(
v
a
l
u
e
s
,
 
N
u
m
b
e
r
(
v
a
l
)
 
|
|
 
0
)
;


 
 
 
 
i
f
 
(
o
p
 
=
=
=
 
"
d
e
l
e
t
e
"
)
 
r
e
t
u
r
n
 
b
u
i
l
d
D
e
l
e
t
e
(
v
a
l
u
e
s
,
 
M
a
t
h
.
m
a
x
(
0
,
 
N
u
m
b
e
r
(
a
r
g
)
 
|
|
 
0
)
)
;


 
 
 
 
r
e
t
u
r
n
 
b
u
i
l
d
I
n
s
e
r
t
(
v
a
l
u
e
s
,
 
M
a
t
h
.
m
a
x
(
0
,
 
N
u
m
b
e
r
(
a
r
g
)
 
|
|
 
0
)
,
 
N
u
m
b
e
r
(
v
a
l
)
 
|
|
 
0
)
;


 
 
}
,
 
[
o
p
,
 
l
i
s
t
S
t
r
,
 
a
r
g
,
 
v
a
l
]
)
;




 
 
c
o
n
s
t
 
p
l
a
y
e
r
 
=
 
u
s
e
S
t
e
p
P
l
a
y
e
r
(
f
r
a
m
e
s
)
;


 
 
c
o
n
s
t
 
f
r
a
m
e
 
=
 
p
l
a
y
e
r
.
c
u
r
r
e
n
t
;


 
 
c
o
n
s
t
 
p
s
e
u
d
o
 
=
 
o
p
 
=
=
=
 
"
h
e
a
d
"
 
?
 
P
S
E
U
D
O
_
H
E
A
D
 
:
 
o
p
 
=
=
=
 
"
d
e
l
e
t
e
"
 
?
 
P
S
E
U
D
O
_
D
E
L
E
T
E
 
:
 
P
S
E
U
D
O
_
I
N
S
E
R
T
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
A
l
g
o
C
a
n
v
a
s


 
 
 
 
 
 
t
i
t
l
e
=
{
`
S
i
n
g
l
y
 
L
i
n
k
e
d
 
L
i
s
t
,
 
$
{
o
p
 
=
=
=
 
"
h
e
a
d
"
 
?
 
"
I
n
s
e
r
t
 
a
t
 
H
e
a
d
"
 
:
 
o
p
 
=
=
=
 
"
d
e
l
e
t
e
"
 
?
 
"
D
e
l
e
t
e
 
a
t
 
k
"
 
:
 
"
I
n
s
e
r
t
 
a
t
 
k
"
}
`
}


 
 
 
 
 
 
p
l
a
y
e
r
=
{
p
l
a
y
e
r
}


 
 
 
 
 
 
i
n
p
u
t
=
{


 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
g
a
p
-
1
.
5
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
(
[
"
h
e
a
d
"
,
 
"
i
n
s
e
r
t
"
,
 
"
d
e
l
e
t
e
"
]
 
a
s
 
O
p
[
]
)
.
m
a
p
(
(
o
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
i
l
l
B
u
t
t
o
n
 
k
e
y
=
{
o
}
 
o
n
C
l
i
c
k
=
{
(
)
 
=
>
 
s
e
t
O
p
(
o
)
}
 
a
c
t
i
v
e
=
{
o
p
 
=
=
=
 
o
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
 
=
=
=
 
"
h
e
a
d
"
 
?
 
"
I
n
s
e
r
t
 
H
e
a
d
"
 
:
 
o
 
=
=
=
 
"
i
n
s
e
r
t
"
 
?
 
"
I
n
s
e
r
t
 
a
t
 
k
"
 
:
 
"
D
e
l
e
t
e
 
a
t
 
k
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
P
i
l
l
B
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
I
n
p
u
t
E
d
i
t
o
r


 
 
 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
L
i
s
t
 
v
a
l
u
e
s
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
l
i
s
t
S
t
r
}


 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
e
.
g
.
 
1
0
,
 
2
0
,
 
3
0
"


 
 
 
 
 
 
 
 
 
 
 
 
h
e
l
p
e
r
=
"
C
o
m
m
a
 
o
r
 
s
p
a
c
e
 
s
e
p
a
r
a
t
e
d
"


 
 
 
 
 
 
 
 
 
 
 
 
p
r
e
s
e
t
s
=
{
[


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
h
o
r
t
"
,
 
v
a
l
u
e
:
 
"
5
,
 
9
,
 
2
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
M
e
d
i
u
m
"
,
 
v
a
l
u
e
:
 
"
1
0
,
 
2
0
,
 
3
0
,
 
4
0
,
 
5
0
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
 
l
a
b
e
l
:
 
"
S
i
n
g
l
e
"
,
 
v
a
l
u
e
:
 
"
7
"
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
]
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
A
p
p
l
y
=
{
s
e
t
L
i
s
t
S
t
r
}


 
 
 
 
 
 
 
 
 
 
 
 
o
n
R
a
n
d
o
m
=
{
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
 
n
 
=
 
3
 
+
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
4
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
L
i
s
t
S
t
r
(
A
r
r
a
y
.
f
r
o
m
(
{
 
l
e
n
g
t
h
:
 
n
 
}
,
 
(
)
 
=
>
 
M
a
t
h
.
f
l
o
o
r
(
M
a
t
h
.
r
a
n
d
o
m
(
)
 
*
 
9
0
)
 
+
 
1
0
)
.
j
o
i
n
(
"
,
 
"
)
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
g
a
p
-
3
 
f
l
e
x
-
w
r
a
p
 
i
t
e
m
s
-
c
e
n
t
e
r
"
>


 
 
 
 
 
 
 
 
 
 
 
 
{
o
p
 
!
=
=
 
"
h
e
a
d
"
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
x
s
 
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
 
f
o
n
t
-
m
e
d
i
u
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
P
o
s
i
t
i
o
n
 
k
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
n
u
m
b
e
r
"
 
v
a
l
u
e
=
{
a
r
g
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
A
r
g
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}
 
m
i
n
=
{
0
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
1
6
 
p
x
-
2
 
p
y
-
1
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
m
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
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
9
0
0
 
d
a
r
k
:
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
{
o
p
 
!
=
=
 
"
d
e
l
e
t
e
"
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
l
a
b
e
l
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
2
 
t
e
x
t
-
x
s
 
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
 
f
o
n
t
-
m
e
d
i
u
m
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
V
a
l
u
e
:


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t
 
t
y
p
e
=
"
n
u
m
b
e
r
"
 
v
a
l
u
e
=
{
v
a
l
}
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
s
e
t
V
a
l
(
e
.
t
a
r
g
e
t
.
v
a
l
u
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
w
-
2
0
 
p
x
-
2
 
p
y
-
1
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
m
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
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
9
0
0
 
d
a
r
k
:
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
}


 
 
 
 
 
 
p
s
e
u
d
o
c
o
d
e
=
{
<
P
s
e
u
d
o
c
o
d
e
P
a
n
e
l
 
l
i
n
e
s
=
{
p
s
e
u
d
o
}
 
a
c
t
i
v
e
L
i
n
e
=
{
f
r
a
m
e
?
.
l
i
n
e
}
 
/
>
}


 
 
 
 
 
 
v
a
r
i
a
b
l
e
s
=
{
<
V
a
r
i
a
b
l
e
s
P
a
n
e
l
 
v
a
r
s
=
{
f
r
a
m
e
?
.
v
a
r
s
 
?
?
 
{
}
}
 
f
l
a
s
h
K
e
y
s
=
{
f
r
a
m
e
?
.
h
i
g
h
l
i
g
h
t
K
e
y
 
?
 
[
f
r
a
m
e
.
h
i
g
h
l
i
g
h
t
K
e
y
]
 
:
 
[
]
}
 
/
>
}


 
 
 
 
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
i
t
e
m
s
-
c
e
n
t
e
r
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
{
f
r
a
m
e
 
&
&
 
<
L
i
n
k
e
d
L
i
s
t
V
i
z
 
f
r
a
m
e
=
{
f
r
a
m
e
}
 
/
>
}


 
 
 
 
 
 
 
 
<
C
a
l
l
o
u
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
f
u
l
l
"
>
{
f
r
a
m
e
?
.
m
e
s
s
a
g
e
 
?
?
 
"
P
r
e
s
s
 
p
l
a
y
 
t
o
 
s
t
e
p
 
t
h
r
o
u
g
h
.
"
}
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
<
/
A
l
g
o
C
a
n
v
a
s
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
L
e
a
r
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
L
e
a
r
n
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
s
e
c
t
i
o
n
s
 
=
 
[


 
 
 
 
{
 
t
i
t
l
e
:
 
"
W
h
a
t
 
i
s
 
a
 
l
i
n
k
e
d
 
l
i
s
t
?
"
,
 
b
o
d
y
:
 
"
A
 
c
h
a
i
n
 
o
f
 
n
o
d
e
 
o
b
j
e
c
t
s
 
w
h
e
r
e
 
e
a
c
h
 
n
o
d
e
 
h
o
l
d
s
 
a
 
v
a
l
u
e
 
a
n
d
 
a
 
p
o
i
n
t
e
r
 
t
o
 
t
h
e
 
n
e
x
t
 
n
o
d
e
.
 
U
n
l
i
k
e
 
a
r
r
a
y
s
,
 
m
e
m
o
r
y
 
i
s
 
n
o
t
 
c
o
n
t
i
g
u
o
u
s
,
 
e
a
c
h
 
n
o
d
e
 
i
s
 
a
l
l
o
c
a
t
e
d
 
s
e
p
a
r
a
t
e
l
y
 
o
n
 
t
h
e
 
h
e
a
p
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
T
h
e
 
h
e
a
d
 
p
o
i
n
t
e
r
"
,
 
b
o
d
y
:
 
"
A
 
s
i
n
g
l
e
 
p
o
i
n
t
e
r
 
'
h
e
a
d
'
 
m
a
r
k
s
 
t
h
e
 
s
t
a
r
t
 
o
f
 
t
h
e
 
l
i
s
t
.
 
T
o
 
a
c
c
e
s
s
 
a
n
y
 
n
o
d
e
 
y
o
u
 
w
a
l
k
 
f
r
o
m
 
h
e
a
d
,
 
f
o
l
l
o
w
i
n
g
 
n
e
x
t
 
p
o
i
n
t
e
r
s
.
 
L
o
s
e
 
h
e
a
d
 
a
n
d
 
y
o
u
 
l
o
s
e
 
t
h
e
 
l
i
s
t
 
(
m
e
m
o
r
y
 
l
e
a
k
 
i
n
 
C
/
C
+
+
)
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
W
h
y
 
i
t
 
b
e
a
t
s
 
a
r
r
a
y
s
 
f
o
r
 
i
n
s
e
r
t
s
"
,
 
b
o
d
y
:
 
"
I
n
s
e
r
t
i
n
g
 
a
t
 
t
h
e
 
s
t
a
r
t
 
o
f
 
a
n
 
a
r
r
a
y
 
i
s
 
O
(
n
)
 
b
e
c
a
u
s
e
 
e
v
e
r
y
 
e
l
e
m
e
n
t
 
s
h
i
f
t
s
.
 
I
n
 
a
 
l
i
n
k
e
d
 
l
i
s
t
,
 
y
o
u
 
r
e
w
i
r
e
 
t
w
o
 
p
o
i
n
t
e
r
s
,
 
O
(
1
)
.
 
T
h
e
 
c
o
s
t
 
i
s
 
O
(
n
)
 
r
a
n
d
o
m
 
a
c
c
e
s
s
:
 
y
o
u
 
c
a
n
n
o
t
 
j
u
m
p
 
t
o
 
i
n
d
e
x
 
7
 
w
i
t
h
o
u
t
 
w
a
l
k
i
n
g
 
n
o
d
e
s
 
0
.
.
6
.
"
 
}
,


 
 
 
 
{
 
t
i
t
l
e
:
 
"
R
e
w
i
r
i
n
g
 
i
s
 
t
h
e
 
w
h
o
l
e
 
g
a
m
e
"
,
 
b
o
d
y
:
 
"
E
v
e
r
y
 
o
p
e
r
a
t
i
o
n
,
 
i
n
s
e
r
t
,
 
d
e
l
e
t
e
,
 
r
e
v
e
r
s
e
,
 
i
s
 
p
o
i
n
t
e
r
 
g
y
m
n
a
s
t
i
c
s
.
 
D
r
a
w
 
b
o
x
e
s
 
a
n
d
 
a
r
r
o
w
s
 
o
n
 
p
a
p
e
r
.
 
T
h
e
 
n
u
m
b
e
r
 
1
 
b
u
g
 
i
s
 
f
o
r
g
e
t
t
i
n
g
 
t
o
 
s
a
v
e
 
a
 
p
o
i
n
t
e
r
 
b
e
f
o
r
e
 
o
v
e
r
w
r
i
t
i
n
g
 
i
t
 
(
l
o
s
i
n
g
 
h
a
l
f
 
t
h
e
 
l
i
s
t
)
.
"
 
}
,


 
 
]
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
5
"
>


 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>
m
e
n
t
a
l
 
m
o
d
e
l
<
/
S
e
c
t
i
o
n
E
y
e
b
r
o
w
>


 
 
 
 
 
 
 
 
<
S
e
c
t
i
o
n
T
i
t
l
e
>
A
 
t
r
e
a
s
u
r
e
 
h
u
n
t
 
o
f
 
p
o
i
n
t
e
r
s
<
/
S
e
c
t
i
o
n
T
i
t
l
e
>


 
 
 
 
 
 
 
 
<
L
e
d
e
>


 
 
 
 
 
 
 
 
 
 
E
a
c
h
 
c
l
u
e
 
(
n
o
d
e
)
 
t
e
l
l
s
 
y
o
u
 
w
h
e
r
e
 
t
h
e
 
n
e
x
t
 
c
l
u
e
 
l
i
v
e
s
.
 
T
h
e
 
g
a
m
e
 
m
a
s
t
e
r
 
o
n
l
y
 
g
i
v
e
s
 
y
o
u
 
t
h
e


 
 
 
 
 
 
 
 
 
 
f
i
r
s
t
 
c
l
u
e
 
(
h
e
a
d
)
.
 
T
o
 
f
i
n
d
 
c
l
u
e
 
#
5
,
 
y
o
u
 
m
u
s
t
 
r
e
a
d
 
c
l
u
e
s
 
1
,
 
2
,
 
3
,
 
4
 
i
n
 
o
r
d
e
r
.


 
 
 
 
 
 
 
 
<
/
L
e
d
e
>


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
g
r
i
d
 
g
r
i
d
-
c
o
l
s
-
1
 
s
m
:
g
r
i
d
-
c
o
l
s
-
2
 
g
a
p
-
3
"
>


 
 
 
 
 
 
 
 
{
s
e
c
t
i
o
n
s
.
m
a
p
(
(
s
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
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
 
f
o
n
t
-
b
o
l
d
 
t
e
x
t
-
l
i
m
e
-
6
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
4
0
0
 
m
b
-
2
 
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
"
>
0
{
i
 
+
 
1
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
f
o
n
t
-
b
o
l
d
 
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
9
0
0
 
d
a
r
k
:
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
 
m
b
-
1
"
>
{
s
.
t
i
t
l
e
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
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
6
0
0
 
d
a
r
k
:
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
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>
{
s
.
b
o
d
y
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
 
 
)
)
}


 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>


 
 
 
 
 
 
 
 
C
o
m
p
l
e
x
i
t
y
 
s
u
m
m
a
r
y
:
 
<
c
o
d
e
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
m
o
n
o
"
>
i
n
s
e
r
t
A
t
H
e
a
d
<
/
c
o
d
e
>
 
a
n
d
{
"
 
"
}


 
 
 
 
 
 
 
 
<
c
o
d
e
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
m
o
n
o
"
>
d
e
l
e
t
e
H
e
a
d
<
/
c
o
d
e
>
 
a
r
e
 
O
(
1
)
.
{
"
 
"
}


 
 
 
 
 
 
 
 
<
c
o
d
e
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
m
o
n
o
"
>
i
n
s
e
r
t
A
t
(
k
)
<
/
c
o
d
e
>
,
{
"
 
"
}


 
 
 
 
 
 
 
 
<
c
o
d
e
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
m
o
n
o
"
>
d
e
l
e
t
e
A
t
(
k
)
<
/
c
o
d
e
>
,
 
a
n
d
{
"
 
"
}


 
 
 
 
 
 
 
 
<
c
o
d
e
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
m
o
n
o
"
>
s
e
a
r
c
h
(
v
)
<
/
c
o
d
e
>
 
a
r
e
 
O
(
n
)
.


 
 
 
 
 
 
<
/
C
a
l
l
o
u
t
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
T
r
y
 
I
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
T
r
y
T
a
b
(
)
 
{


 
 
c
o
n
s
t
 
p
r
o
b
l
e
m
s
 
=
 
[


 
 
 
 
{
 
q
:
 
"
G
i
v
e
n
 
l
i
s
t
 
[
3
→
7
→
9
→
4
]
 
a
n
d
 
o
p
e
r
a
t
i
o
n
 
i
n
s
e
r
t
A
t
H
e
a
d
(
5
)
,
 
f
i
n
a
l
 
l
i
s
t
?
"
,
 
a
:
 
"
5
→
3
→
7
→
9
→
4
"
 
}
,


 
 
 
 
{
 
q
:
 
"
G
i
v
e
n
 
[
1
→
2
→
3
→
4
→
5
]
,
 
d
e
l
e
t
e
 
a
t
 
k
=
2
.
 
F
i
n
a
l
 
l
i
s
t
?
"
,
 
a
:
 
"
1
→
2
→
4
→
5
"
 
}
,


 
 
 
 
{
 
q
:
 
"
T
i
m
e
 
c
o
m
p
l
e
x
i
t
y
 
o
f
 
d
e
l
e
t
i
n
g
 
t
h
e
 
l
a
s
t
 
n
o
d
e
 
o
f
 
a
 
s
i
n
g
l
y
 
l
i
n
k
e
d
 
l
i
s
t
 
(
n
o
 
t
a
i
l
 
p
o
i
n
t
e
r
)
?
"
,
 
a
:
 
"
O
(
n
)
"
 
}
,


 
 
]
;


 
 
c
o
n
s
t
 
[
g
u
e
s
s
,
 
s
e
t
G
u
e
s
s
]
 
=
 
u
s
e
S
t
a
t
e
<
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
l
l
)
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
n
u
l
l
)
)
;


 
 
c
o
n
s
t
 
[
s
h
o
w
,
 
s
e
t
S
h
o
w
]
 
=
 
u
s
e
S
t
a
t
e
<
b
o
o
l
e
a
n
[
]
>
(
p
r
o
b
l
e
m
s
.
m
a
p
(
(
)
 
=
>
 
f
a
l
s
e
)
)
;


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
3
"
>


 
 
 
 
 
 
<
C
a
l
l
o
u
t
>
T
r
a
c
e
 
e
a
c
h
 
o
p
e
r
a
t
i
o
n
 
o
n
 
p
a
p
e
r
.
 
W
r
i
t
e
 
t
h
e
 
f
i
n
a
l
 
l
i
s
t
 
n
o
t
a
t
i
o
n
.
<
/
C
a
l
l
o
u
t
>


 
 
 
 
 
 
{
p
r
o
b
l
e
m
s
.
m
a
p
(
(
p
,
 
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
<
C
a
r
d
 
k
e
y
=
{
i
}
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
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
8
0
0
 
d
a
r
k
:
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
2
0
0
 
m
b
-
3
"
>
#
{
i
 
+
 
1
}
 
{
p
.
q
}
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
g
a
p
-
2
 
i
t
e
m
s
-
c
e
n
t
e
r
 
f
l
e
x
-
w
r
a
p
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
g
u
e
s
s
[
i
]
 
?
?
 
"
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
h
a
n
g
e
=
{
(
e
)
 
=
>
 
{
 
c
o
n
s
t
 
v
 
=
 
[
.
.
.
g
u
e
s
s
]
;
 
v
[
i
]
 
=
 
e
.
t
a
r
g
e
t
.
v
a
l
u
e
;
 
s
e
t
G
u
e
s
s
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
l
a
c
e
h
o
l
d
e
r
=
"
y
o
u
r
 
a
n
s
w
e
r
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
3
 
p
y
-
1
.
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
f
o
n
t
-
m
o
n
o
 
t
e
x
t
-
s
m
 
b
g
-
s
t
o
n
e
-
5
0
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
5
0
 
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
9
0
0
 
d
a
r
k
:
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
 
m
i
n
-
w
-
4
4
"


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
b
u
t
t
o
n
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
C
l
i
c
k
=
{
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
 
v
 
=
 
[
.
.
.
s
h
o
w
]
;
 
v
[
i
]
 
=
 
t
r
u
e
;
 
s
e
t
S
h
o
w
(
v
)
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
l
a
s
s
N
a
m
e
=
"
p
x
-
3
 
p
y
-
1
.
5
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
s
t
o
n
e
-
2
0
0
 
d
a
r
k
:
b
o
r
d
e
r
-
w
h
i
t
e
/
1
0
 
r
o
u
n
d
e
d
-
m
d
 
t
e
x
t
-
x
s
 
f
o
n
t
-
m
e
d
i
u
m
 
b
g
-
w
h
i
t
e
 
d
a
r
k
:
b
g
-
s
t
o
n
e
-
9
0
0
 
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
6
0
0
 
d
a
r
k
:
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
4
0
0
 
c
u
r
s
o
r
-
p
o
i
n
t
e
r
 
h
o
v
e
r
:
b
o
r
d
e
r
-
s
t
o
n
e
-
4
0
0
 
d
a
r
k
:
h
o
v
e
r
:
b
o
r
d
e
r
-
w
h
i
t
e
/
3
0
 
t
r
a
n
s
i
t
i
o
n
-
c
o
l
o
r
s
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
v
e
a
l


 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
[
i
]
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
x
s
 
f
o
n
t
-
b
o
l
d
 
p
x
-
3
 
p
y
-
1
.
5
 
r
o
u
n
d
e
d
-
m
d
 
b
g
-
l
i
m
e
-
5
0
 
d
a
r
k
:
b
g
-
l
i
m
e
-
4
0
0
/
1
0
 
t
e
x
t
-
l
i
m
e
-
8
0
0
 
d
a
r
k
:
t
e
x
t
-
l
i
m
e
-
2
0
0
 
b
o
r
d
e
r
 
b
o
r
d
e
r
-
l
i
m
e
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
A
n
s
w
e
r
:
 
{
p
.
a
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
)
)
}


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
I
n
s
i
g
h
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




f
u
n
c
t
i
o
n
 
I
n
s
i
g
h
t
T
a
b
(
)
 
{


 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
d
i
v
 
c
l
a
s
s
N
a
m
e
=
"
f
l
e
x
 
f
l
e
x
-
c
o
l
 
g
a
p
-
4
"
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
T
h
e
 
d
u
m
m
y
-
h
e
a
d
 
t
r
i
c
k
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
p
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
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
6
0
0
 
d
a
r
k
:
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
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
"
>


 
 
 
 
 
 
 
 
 
 
I
n
t
e
r
v
i
e
w
e
r
s
 
l
o
v
e
 
t
h
i
s
.
 
A
l
l
o
c
a
t
e
 
a
 
f
a
k
e
 
n
o
d
e
 
w
h
o
s
e
 
<
c
o
d
e
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
m
o
n
o
"
>
n
e
x
t
<
/
c
o
d
e
>
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
p
o
i
n
t
s
 
t
o
 
t
h
e
 
r
e
a
l
 
h
e
a
d
.
 
N
o
w
 
e
v
e
r
y
 
d
e
l
e
t
i
o
n
 
h
a
s
 
a
 
p
r
e
d
e
c
e
s
s
o
r
,
 
n
o
 
m
o
r
e
 
"
i
f
 
k
 
=
=
 
0
"
 
s
p
e
c
i
a
l


 
 
 
 
 
 
 
 
 
 
c
a
s
e
.
 
A
t
 
t
h
e
 
e
n
d
,
 
r
e
t
u
r
n
 
<
c
o
d
e
 
c
l
a
s
s
N
a
m
e
=
"
f
o
n
t
-
m
o
n
o
"
>
d
u
m
m
y
.
n
e
x
t
<
/
c
o
d
e
>
.


 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
 
 
<
C
a
r
d
>


 
 
 
 
 
 
 
 
<
S
u
b
H
e
a
d
i
n
g
>
W
h
e
r
e
 
l
i
n
k
e
d
 
l
i
s
t
s
 
s
h
o
w
 
u
p
 
i
n
 
r
e
a
l
 
l
i
f
e
<
/
S
u
b
H
e
a
d
i
n
g
>


 
 
 
 
 
 
 
 
<
u
l
 
c
l
a
s
s
N
a
m
e
=
"
t
e
x
t
-
s
m
 
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
6
0
0
 
d
a
r
k
:
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
4
0
0
 
l
e
a
d
i
n
g
-
r
e
l
a
x
e
d
 
s
p
a
c
e
-
y
-
1
 
p
l
-
4
 
l
i
s
t
-
d
i
s
c
"
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
O
S
 
f
r
e
e
-
m
e
m
o
r
y
 
l
i
s
t
s
 
(
k
e
r
n
e
l
 
h
e
a
p
)
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
A
d
j
a
c
e
n
c
y
 
l
i
s
t
s
 
i
n
 
s
p
a
r
s
e
 
g
r
a
p
h
s
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
U
n
d
o
 
h
i
s
t
o
r
y
,
 
b
r
o
w
s
e
r
 
b
a
c
k
-
s
t
a
c
k
,
 
M
R
U
 
c
a
c
h
e
s
 
(
a
s
 
d
o
u
b
l
y
-
l
i
n
k
e
d
 
l
i
s
t
s
)
<
/
l
i
>


 
 
 
 
 
 
 
 
 
 
<
l
i
>
L
i
n
k
e
d
H
a
s
h
M
a
p
 
b
u
c
k
e
t
s
 
(
c
h
a
i
n
i
n
g
)
,
 
s
e
e
 
t
h
e
 
H
a
s
h
i
n
g
 
l
e
s
s
o
n
<
/
l
i
>


 
 
 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
 
 
<
/
C
a
r
d
>


 
 
 
 
<
/
d
i
v
>


 
 
)
;


}




/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/


/
*
 
 
R
o
o
t
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
-
 
*
/




i
n
t
e
r
f
a
c
e
 
P
r
o
p
s
 
{


 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
?
:
 
(
s
c
o
r
e
:
 
n
u
m
b
e
r
)
 
=
>
 
v
o
i
d
;


}




e
x
p
o
r
t
 
d
e
f
a
u
l
t
 
f
u
n
c
t
i
o
n
 
L
2
_
S
i
n
g
l
y
L
i
n
k
e
d
L
i
s
t
(
{
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
 
}
:
 
P
r
o
p
s
)
 
{


 
 
c
o
n
s
t
 
t
a
b
s
:
 
L
e
s
s
o
n
T
a
b
D
e
f
[
]
 
=
 
[


 
 
 
 
{
 
i
d
:
 
"
l
e
a
r
n
"
,
 
l
a
b
e
l
:
 
"
L
e
a
r
n
"
,
 
i
c
o
n
:
 
<
B
o
o
k
O
p
e
n
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
L
e
a
r
n
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
v
i
s
u
a
l
i
z
e
"
,
 
l
a
b
e
l
:
 
"
V
i
s
u
a
l
i
z
e
"
,
 
i
c
o
n
:
 
<
P
l
a
y
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
V
i
s
u
a
l
i
z
e
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
t
r
y
"
,
 
l
a
b
e
l
:
 
"
T
r
y
 
I
t
"
,
 
i
c
o
n
:
 
<
T
a
r
g
e
t
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
T
r
y
T
a
b
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
i
n
s
i
g
h
t
"
,
 
l
a
b
e
l
:
 
"
I
n
s
i
g
h
t
"
,
 
i
c
o
n
:
 
<
L
i
g
h
t
b
u
l
b
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
I
n
s
i
g
h
t
T
a
b
 
/
>
 
}
,


 
 
 
 
.
.
.
(
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G


 
 
 
 
 
 
?
 
[
{
 
i
d
:
 
"
p
r
a
c
t
i
c
e
"
,
 
l
a
b
e
l
:
 
"
P
r
a
c
t
i
c
e
"
,
 
i
c
o
n
:
 
<
C
o
d
e
2
 
c
l
a
s
s
N
a
m
e
=
"
w
-
4
 
h
-
4
"
 
/
>
,
 
c
o
n
t
e
n
t
:
 
<
P
r
a
c
t
i
c
e
T
a
b
 
t
o
p
i
c
S
l
u
g
=
{
P
R
A
C
T
I
C
E
_
T
O
P
I
C
_
S
L
U
G
}
 
/
>
 
}
]


 
 
 
 
 
 
:
 
[
]
)
,


 
 
]
;




 
 
c
o
n
s
t
 
q
u
i
z
:
 
L
e
s
s
o
n
Q
u
i
z
Q
u
e
s
t
i
o
n
[
]
 
=
 
[


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
a
t
 
i
s
 
t
h
e
 
t
i
m
e
 
c
o
m
p
l
e
x
i
t
y
 
o
f
 
i
n
s
e
r
t
i
n
g
 
a
t
 
t
h
e
 
h
e
a
d
 
o
f
 
a
 
s
i
n
g
l
y
 
l
i
n
k
e
d
 
l
i
s
t
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
O
(
n
)
"
,
 
"
O
(
l
o
g
 
n
)
"
,
 
"
O
(
1
)
"
,
 
"
O
(
n
 
l
o
g
 
n
)
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
2
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
O
n
l
y
 
t
w
o
 
p
o
i
n
t
e
r
s
 
r
e
w
i
r
e
:
 
n
e
w
N
o
d
e
.
n
e
x
t
 
←
 
h
e
a
d
,
 
t
h
e
n
 
h
e
a
d
 
←
 
n
e
w
N
o
d
e
.
 
I
n
d
e
p
e
n
d
e
n
t
 
o
f
 
l
i
s
t
 
l
e
n
g
t
h
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
T
o
 
d
e
l
e
t
e
 
t
h
e
 
n
o
d
e
 
a
t
 
p
o
s
i
t
i
o
n
 
k
 
i
n
 
a
 
s
i
n
g
l
y
 
l
i
n
k
e
d
 
l
i
s
t
,
 
y
o
u
 
m
u
s
t
 
f
i
r
s
t
 
w
a
l
k
 
t
o
 
w
h
i
c
h
 
n
o
d
e
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
T
h
e
 
n
o
d
e
 
a
t
 
p
o
s
i
t
i
o
n
 
k
"
,
 
"
T
h
e
 
n
o
d
e
 
a
t
 
p
o
s
i
t
i
o
n
 
k
-
1
 
(
p
r
e
d
e
c
e
s
s
o
r
)
"
,
 
"
T
h
e
 
l
a
s
t
 
n
o
d
e
"
,
 
"
T
h
e
 
h
e
a
d
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
Y
o
u
 
n
e
e
d
 
t
h
e
 
p
r
e
d
e
c
e
s
s
o
r
 
t
o
 
r
e
w
i
r
e
 
i
t
s
 
n
e
x
t
 
p
o
i
n
t
e
r
,
 
s
k
i
p
p
i
n
g
 
o
v
e
r
 
t
h
e
 
n
o
d
e
 
a
t
 
k
.
 
S
i
n
g
l
y
-
l
i
n
k
e
d
 
m
e
a
n
s
 
y
o
u
 
c
a
n
n
o
t
 
g
o
 
b
a
c
k
w
a
r
d
s
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
A
 
s
i
n
g
l
y
 
l
i
n
k
e
d
 
l
i
s
t
 
h
a
s
 
h
e
a
d
 
→
 
4
 
→
 
8
 
→
 
2
 
→
 
6
.
 
A
f
t
e
r
 
i
n
s
e
r
t
A
t
(
2
,
 
9
9
)
 
t
h
e
 
l
i
s
t
 
b
e
c
o
m
e
s
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[
"
4
 
→
 
9
9
 
→
 
8
 
→
 
2
 
→
 
6
"
,
 
"
4
 
→
 
8
 
→
 
9
9
 
→
 
2
 
→
 
6
"
,
 
"
9
9
 
→
 
4
 
→
 
8
 
→
 
2
 
→
 
6
"
,
 
"
4
 
→
 
8
 
→
 
2
 
→
 
9
9
 
→
 
6
"
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
P
o
s
i
t
i
o
n
 
2
 
(
z
e
r
o
-
i
n
d
e
x
e
d
)
 
m
e
a
n
s
 
t
h
e
 
p
r
e
d
e
c
e
s
s
o
r
 
i
s
 
i
n
d
e
x
 
1
 
(
v
a
l
u
e
 
8
)
.
 
N
e
w
 
n
o
d
e
 
s
l
o
t
s
 
b
e
t
w
e
e
n
 
8
 
a
n
d
 
2
.
"
,


 
 
 
 
}
,


 
 
 
 
{


 
 
 
 
 
 
q
u
e
s
t
i
o
n
:
 
"
W
h
y
 
c
a
n
'
t
 
a
r
r
a
y
s
 
m
a
t
c
h
 
l
i
n
k
e
d
-
l
i
s
t
 
i
n
s
e
r
t
i
o
n
 
s
p
e
e
d
 
a
t
 
t
h
e
 
f
r
o
n
t
?
"
,


 
 
 
 
 
 
o
p
t
i
o
n
s
:
 
[


 
 
 
 
 
 
 
 
"
A
r
r
a
y
s
 
u
s
e
 
m
o
r
e
 
m
e
m
o
r
y
"
,


 
 
 
 
 
 
 
 
"
A
r
r
a
y
s
 
m
u
s
t
 
s
h
i
f
t
 
e
v
e
r
y
 
e
l
e
m
e
n
t
 
o
n
e
 
p
o
s
i
t
i
o
n
 
r
i
g
h
t
,
 
O
(
n
)
"
,


 
 
 
 
 
 
 
 
"
A
r
r
a
y
s
 
d
o
n
'
t
 
s
u
p
p
o
r
t
 
n
u
m
b
e
r
s
"
,


 
 
 
 
 
 
 
 
"
A
r
r
a
y
s
 
a
r
e
 
i
m
m
u
t
a
b
l
e
"
,


 
 
 
 
 
 
]
,


 
 
 
 
 
 
c
o
r
r
e
c
t
I
n
d
e
x
:
 
1
,


 
 
 
 
 
 
e
x
p
l
a
n
a
t
i
o
n
:
 
"
C
o
n
t
i
g
u
o
u
s
 
m
e
m
o
r
y
 
i
s
 
t
h
e
 
a
r
r
a
y
'
s
 
s
t
r
e
n
g
t
h
 
(
O
(
1
)
 
r
a
n
d
o
m
 
a
c
c
e
s
s
)
 
a
n
d
 
w
e
a
k
n
e
s
s
 
(
O
(
n
)
 
f
r
o
n
t
-
i
n
s
e
r
t
)
.
 
L
i
n
k
e
d
 
l
i
s
t
s
 
t
r
a
d
e
 
o
n
e
 
f
o
r
 
t
h
e
 
o
t
h
e
r
.
"
,


 
 
 
 
}
,


 
 
]
;




 
 
r
e
t
u
r
n
 
(


 
 
 
 
<
L
e
s
s
o
n
S
h
e
l
l


 
 
 
 
 
 
t
i
t
l
e
=
"
S
i
n
g
l
y
 
L
i
n
k
e
d
 
L
i
s
t
s
"


 
 
 
 
 
 
l
e
v
e
l
=
{
2
}


 
 
 
 
 
 
l
e
s
s
o
n
N
u
m
b
e
r
=
{
3
}


 
 
 
 
 
 
t
a
b
s
=
{
t
a
b
s
}


 
 
 
 
 
 
q
u
i
z
=
{
q
u
i
z
}


 
 
 
 
 
 
p
l
a
c
e
m
e
n
t
R
e
l
e
v
a
n
c
e
=
"
R
e
v
e
r
s
a
l
,
 
c
y
c
l
e
 
d
e
t
e
c
t
i
o
n
,
 
a
n
d
 
m
e
r
g
e
 
q
u
e
s
t
i
o
n
s
 
a
r
e
 
s
t
a
p
l
e
 
i
n
t
e
r
v
i
e
w
 
p
r
o
b
l
e
m
s
.
"


 
 
 
 
 
 
n
e
x
t
L
e
s
s
o
n
H
i
n
t
=
"
D
o
u
b
l
y
 
&
 
C
i
r
c
u
l
a
r
 
L
i
n
k
e
d
 
L
i
s
t
s
"


 
 
 
 
 
 
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
=
{
o
n
Q
u
i
z
C
o
m
p
l
e
t
e
}


 
 
 
 
/
>


 
 
)
;


}


