
i
m
p
o
r
t
 
{
 
m
o
t
i
o
n
 
}
 
f
r
o
m
 
"
f
r
a
m
e
r
-
m
o
t
i
o
n
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
e
n
d
a
r
,
 
C
r
o
w
n
,
 
F
i
l
e
T
e
x
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
 
M
e
t
a
R
o
w
 
}
 
f
r
o
m
 
"
.
/
M
e
t
a
R
o
w
"
;


i
m
p
o
r
t
 
{
 
c
a
r
d
C
l
s
 
}
 
f
r
o
m
 
"
.
/
s
t
y
l
e
s
"
;




c
o
n
s
t
 
M
A
X
_
R
E
S
U
M
E
S
 
=
 
2
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
 
P
r
o
f
i
l
e
S
t
r
e
n
g
t
h
C
a
r
d
P
r
o
p
s
 
{


 
 
p
r
o
f
i
l
e
C
o
m
p
l
e
t
i
o
n
:
 
n
u
m
b
e
r
;


 
 
r
e
s
u
m
e
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


 
 
d
i
s
p
l
a
y
D
a
t
e
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
;


 
 
i
s
P
r
e
m
i
u
m
:
 
b
o
o
l
e
a
n
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
 
P
r
o
f
i
l
e
S
t
r
e
n
g
t
h
C
a
r
d
(
{


 
 
p
r
o
f
i
l
e
C
o
m
p
l
e
t
i
o
n
,


 
 
r
e
s
u
m
e
C
o
u
n
t
,


 
 
d
i
s
p
l
a
y
D
a
t
e
,


 
 
i
s
P
r
e
m
i
u
m
,


}
:
 
P
r
o
f
i
l
e
S
t
r
e
n
g
t
h
C
a
r
d
P
r
o
p
s
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
{
`
$
{
c
a
r
d
C
l
s
}
 
p
-
5
`
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
 
j
u
s
t
i
f
y
-
b
e
t
w
e
e
n
 
m
b
-
3
"
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
i
n
l
i
n
e
-
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
"
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
h
-
1
 
w
-
1
 
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
"
 
/
>


 
 
 
 
 
 
 
 
 
 
p
r
o
f
i
l
e
 
s
t
r
e
n
g
t
h


 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
 
t
a
b
u
l
a
r
-
n
u
m
s
"
>


 
 
 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
C
o
m
p
l
e
t
i
o
n
}
%


 
 
 
 
 
 
 
 
<
/
s
p
a
n
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
w
-
f
u
l
l
 
h
-
1
 
b
g
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
g
-
w
h
i
t
e
/
1
0
 
o
v
e
r
f
l
o
w
-
h
i
d
d
e
n
 
r
o
u
n
d
e
d
-
f
u
l
l
"
>


 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
d
i
v


 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
{
{
 
w
i
d
t
h
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
{
{
 
w
i
d
t
h
:
 
`
$
{
p
r
o
f
i
l
e
C
o
m
p
l
e
t
i
o
n
}
%
`
 
}
}


 
 
 
 
 
 
 
 
 
 
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
=
{
{
 
d
u
r
a
t
i
o
n
:
 
0
.
9
,
 
d
e
l
a
y
:
 
0
.
2
,
 
e
a
s
e
:
 
"
e
a
s
e
O
u
t
"
 
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
h
-
f
u
l
l
 
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
"


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
/
d
i
v
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
 
m
t
-
3
 
l
e
a
d
i
n
g
-
s
n
u
g
"
>


 
 
 
 
 
 
 
 
{
p
r
o
f
i
l
e
C
o
m
p
l
e
t
i
o
n
 
>
=
 
8
0


 
 
 
 
 
 
 
 
 
 
?
 
"
L
o
o
k
i
n
g
 
g
r
e
a
t
.
 
Y
o
u
r
 
p
r
o
f
i
l
e
 
i
s
 
w
e
l
l
 
f
i
l
l
e
d
.
"


 
 
 
 
 
 
 
 
 
 
:
 
p
r
o
f
i
l
e
C
o
m
p
l
e
t
i
o
n
 
>
=
 
5
0


 
 
 
 
 
 
 
 
 
 
?
 
"
G
o
o
d
 
s
t
a
r
t
.
 
A
d
d
 
m
o
r
e
 
d
e
t
a
i
l
s
 
t
o
 
s
t
a
n
d
 
o
u
t
.
"


 
 
 
 
 
 
 
 
 
 
:
 
"
F
i
l
l
 
y
o
u
r
 
p
r
o
f
i
l
e
 
t
o
 
a
t
t
r
a
c
t
 
r
e
c
r
u
i
t
e
r
s
.
"
}


 
 
 
 
 
 
<
/
p
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
m
t
-
5
 
p
t
-
5
 
b
o
r
d
e
r
-
t
 
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
 
s
p
a
c
e
-
y
-
2
.
5
"
>


 
 
 
 
 
 
 
 
<
M
e
t
a
R
o
w


 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
<
C
a
l
e
n
d
a
r
 
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
3
.
5
 
h
-
3
.
5
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
j
o
i
n
e
d
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{


 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
D
a
t
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
n
e
w
 
D
a
t
e
(
d
i
s
p
l
a
y
D
a
t
e
)
.
t
o
L
o
c
a
l
e
D
a
t
e
S
t
r
i
n
g
(
"
e
n
-
I
N
"
,
 
{
 
m
o
n
t
h
:
 
"
s
h
o
r
t
"
,
 
y
e
a
r
:
 
"
n
u
m
e
r
i
c
"
 
}
)


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
-
-
-
"


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
M
e
t
a
R
o
w


 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
<
F
i
l
e
T
e
x
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
3
.
5
 
h
-
3
.
5
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
r
e
s
u
m
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
`
$
{
r
e
s
u
m
e
C
o
u
n
t
}
/
$
{
M
A
X
_
R
E
S
U
M
E
S
}
`
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
<
M
e
t
a
R
o
w


 
 
 
 
 
 
 
 
 
 
i
c
o
n
=
{
<
C
r
o
w
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
{
`
w
-
3
.
5
 
h
-
3
.
5
 
$
{
i
s
P
r
e
m
i
u
m
 
?
 
"
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
5
0
0
"
 
:
 
"
"
}
`
}
 
/
>
}


 
 
 
 
 
 
 
 
 
 
l
a
b
e
l
=
"
p
l
a
n
"


 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{


 
 
 
 
 
 
 
 
 
 
 
 
i
s
P
r
e
m
i
u
m
 
?
 
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
 
f
o
n
t
-
b
o
l
d
"
>
P
r
o
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
>
F
r
e
e
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
)


 
 
 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
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


 
 
)
;


}


