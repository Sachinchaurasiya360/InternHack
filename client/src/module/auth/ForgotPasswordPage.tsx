
i
m
p
o
r
t
 
R
e
a
c
t
,
 
{
 
u
s
e
S
t
a
t
e
,
 
u
s
e
R
e
f
,
 
u
s
e
E
f
f
e
c
t
,
 
u
s
e
C
a
l
l
b
a
c
k
 
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
 
L
i
n
k
,
 
u
s
e
N
a
v
i
g
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
-
r
o
u
t
e
r
"
;


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
,
 
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
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
 
E
y
e
,
 
E
y
e
O
f
f
,
 
C
h
e
c
k
,
 
X
 
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
 
t
o
a
s
t
 
f
r
o
m
 
"
@
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
u
i
/
t
o
a
s
t
"
;


i
m
p
o
r
t
 
a
p
i
 
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
l
i
b
/
a
x
i
o
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
 
N
a
v
b
a
r
 
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
N
a
v
b
a
r
"
;


i
m
p
o
r
t
 
{
 
S
E
O
 
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
S
E
O
"
;




c
o
n
s
t
 
P
A
S
S
W
O
R
D
_
C
R
I
T
E
R
I
A
 
=
 
[


 
 
{
 
i
d
:
 
"
l
e
n
g
t
h
"
,
 
 
 
 
l
a
b
e
l
:
 
"
A
t
 
l
e
a
s
t
 
8
 
c
h
a
r
a
c
t
e
r
s
"
,
 
 
t
e
s
t
:
 
(
p
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
 
p
.
l
e
n
g
t
h
 
>
=
 
8
 
}
,


 
 
{
 
i
d
:
 
"
u
p
p
e
r
c
a
s
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
O
n
e
 
u
p
p
e
r
c
a
s
e
 
l
e
t
t
e
r
"
,
 
 
 
 
t
e
s
t
:
 
(
p
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
 
/
[
A
-
Z
]
/
.
t
e
s
t
(
p
)
 
}
,


 
 
{
 
i
d
:
 
"
l
o
w
e
r
c
a
s
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
O
n
e
 
l
o
w
e
r
c
a
s
e
 
l
e
t
t
e
r
"
,
 
 
 
 
t
e
s
t
:
 
(
p
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
 
/
[
a
-
z
]
/
.
t
e
s
t
(
p
)
 
}
,


 
 
{
 
i
d
:
 
"
n
u
m
b
e
r
"
,
 
 
 
 
l
a
b
e
l
:
 
"
O
n
e
 
n
u
m
b
e
r
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
s
t
:
 
(
p
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
 
/
[
0
-
9
]
/
.
t
e
s
t
(
p
)
 
}
,


 
 
{
 
i
d
:
 
"
s
p
e
c
i
a
l
"
,
 
 
 
l
a
b
e
l
:
 
"
O
n
e
 
s
p
e
c
i
a
l
 
c
h
a
r
a
c
t
e
r
"
,
 
 
t
e
s
t
:
 
(
p
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
 
/
[
\
W
_
]
/
.
t
e
s
t
(
p
)
 
}
,


]
 
a
s
 
c
o
n
s
t
;




t
y
p
e
 
S
t
r
e
n
g
t
h
L
e
v
e
l
 
=
 
0
 
|
 
1
 
|
 
2
 
|
 
3
 
|
 
4
 
|
 
5
;




f
u
n
c
t
i
o
n
 
g
e
t
P
a
s
s
w
o
r
d
S
t
r
e
n
g
t
h
(
p
a
s
s
w
o
r
d
:
 
s
t
r
i
n
g
)
:
 
S
t
r
e
n
g
t
h
L
e
v
e
l
 
{


 
 
i
f
 
(
!
p
a
s
s
w
o
r
d
)
 
r
e
t
u
r
n
 
0
;


 
 
c
o
n
s
t
 
p
a
s
s
e
d
 
=
 
P
A
S
S
W
O
R
D
_
C
R
I
T
E
R
I
A
.
f
i
l
t
e
r
(
(
c
)
 
=
>
 
c
.
t
e
s
t
(
p
a
s
s
w
o
r
d
)
)
.
l
e
n
g
t
h
;


 
 
r
e
t
u
r
n
 
p
a
s
s
e
d
 
a
s
 
S
t
r
e
n
g
t
h
L
e
v
e
l
;


}




c
o
n
s
t
 
S
T
R
E
N
G
T
H
_
M
E
T
A
:
 
R
e
c
o
r
d
<


 
 
S
t
r
e
n
g
t
h
L
e
v
e
l
,


 
 
{
 
l
a
b
e
l
:
 
s
t
r
i
n
g
;
 
s
e
g
m
e
n
t
C
l
a
s
s
:
 
s
t
r
i
n
g
;
 
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
:
 
s
t
r
i
n
g
 
}


>
 
=
 
{


 
 
0
:
 
{
 
l
a
b
e
l
:
 
"
"
,
 
 
 
 
 
 
 
s
e
g
m
e
n
t
C
l
a
s
s
:
 
"
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
s
t
o
n
e
-
7
0
0
"
,
 
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
:
 
"
"
 
}
,


 
 
1
:
 
{
 
l
a
b
e
l
:
 
"
W
e
a
k
"
,
 
 
 
s
e
g
m
e
n
t
C
l
a
s
s
:
 
"
b
g
-
r
e
d
-
5
0
0
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
"
t
e
x
t
-
r
e
d
-
5
0
0
"
 
}
,


 
 
2
:
 
{
 
l
a
b
e
l
:
 
"
W
e
a
k
"
,
 
 
 
s
e
g
m
e
n
t
C
l
a
s
s
:
 
"
b
g
-
r
e
d
-
5
0
0
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
"
t
e
x
t
-
r
e
d
-
5
0
0
"
 
}
,


 
 
3
:
 
{
 
l
a
b
e
l
:
 
"
F
a
i
r
"
,
 
 
 
s
e
g
m
e
n
t
C
l
a
s
s
:
 
"
b
g
-
a
m
b
e
r
-
4
0
0
"
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
"
t
e
x
t
-
a
m
b
e
r
-
5
0
0
"
 
}
,


 
 
4
:
 
{
 
l
a
b
e
l
:
 
"
G
o
o
d
"
,
 
 
 
s
e
g
m
e
n
t
C
l
a
s
s
:
 
"
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
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
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
"
 
}
,


 
 
5
:
 
{
 
l
a
b
e
l
:
 
"
S
t
r
o
n
g
"
,
 
s
e
g
m
e
n
t
C
l
a
s
s
:
 
"
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
,
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
:
 
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
"
 
}
,


}
;




c
o
n
s
t
 
P
a
s
s
w
o
r
d
S
t
r
e
n
g
t
h
I
n
d
i
c
a
t
o
r
 
=
 
R
e
a
c
t
.
m
e
m
o
(
f
u
n
c
t
i
o
n
 
P
a
s
s
w
o
r
d
S
t
r
e
n
g
t
h
I
n
d
i
c
a
t
o
r
(
{


 
 
p
a
s
s
w
o
r
d
,


}
:
 
{


 
 
p
a
s
s
w
o
r
d
:
 
s
t
r
i
n
g
;


}
)
 
{


 
 
c
o
n
s
t
 
s
t
r
e
n
g
t
h
 
=
 
g
e
t
P
a
s
s
w
o
r
d
S
t
r
e
n
g
t
h
(
p
a
s
s
w
o
r
d
)
;


 
 
c
o
n
s
t
 
m
e
t
a
 
=
 
S
T
R
E
N
G
T
H
_
M
E
T
A
[
s
t
r
e
n
g
t
h
]
;




 
 
i
f
 
(
!
p
a
s
s
w
o
r
d
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
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
-
4
 
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
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
}
}


 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
-
4
 
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
2
 
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
m
t
-
2
 
s
p
a
c
e
-
y
-
2
"


 
 
 
 
 
 
a
r
i
a
-
l
i
v
e
=
"
p
o
l
i
t
e
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
 
f
l
e
x
-
1
"
>


 
 
 
 
 
 
 
 
 
 
{
(
[
1
,
 
2
,
 
3
,
 
4
,
 
5
]
 
a
s
 
S
t
r
e
n
g
t
h
L
e
v
e
l
[
]
)
.
m
a
p
(
(
l
e
v
e
l
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
l
e
v
e
l
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
1
 
f
l
e
x
-
1
 
r
o
u
n
d
e
d
-
s
m
 
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
s
t
o
n
e
-
7
0
0
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
h
-
f
u
l
l
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
r
e
n
g
t
h
 
>
=
 
l
e
v
e
l
 
?
 
m
e
t
a
.
s
e
g
m
e
n
t
C
l
a
s
s
 
:
 
"
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
"
0
%
"
 
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
 
s
t
r
e
n
g
t
h
 
>
=
 
l
e
v
e
l
 
?
 
"
1
0
0
%
"
 
:
 
"
0
%
"
 
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
3
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
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
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
 
m
o
d
e
=
"
w
a
i
t
"
>


 
 
 
 
 
 
 
 
 
 
{
m
e
t
a
.
l
a
b
e
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
s
p
a
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
m
e
t
a
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
o
p
a
c
i
t
y
:
 
0
,
 
x
:
 
4
 
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
 
o
p
a
c
i
t
y
:
 
1
,
 
x
:
 
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
e
x
i
t
=
{
{
 
o
p
a
c
i
t
y
:
 
0
,
 
x
:
 
-
4
 
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
2
 
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
{
`
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
 
w
-
1
2
 
t
e
x
t
-
r
i
g
h
t
 
$
{
m
e
t
a
.
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
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
e
t
a
.
l
a
b
e
l
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
<
/
d
i
v
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
s
p
a
c
e
-
y
-
1
"
 
a
r
i
a
-
l
a
b
e
l
=
"
P
a
s
s
w
o
r
d
 
r
e
q
u
i
r
e
m
e
n
t
s
"
>


 
 
 
 
 
 
 
 
{
P
A
S
S
W
O
R
D
_
C
R
I
T
E
R
I
A
.
m
a
p
(
(
c
r
i
t
e
r
i
o
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
a
s
s
e
d
 
=
 
c
r
i
t
e
r
i
o
n
.
t
e
s
t
(
p
a
s
s
w
o
r
d
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
l
i


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
c
r
i
t
e
r
i
o
n
.
i
d
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
1
.
5
 
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
o
n
o
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
{
`
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
c
e
n
t
e
r
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
s
s
e
d
 
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
"
 
:
 
"
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
a
s
s
e
d
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
C
h
e
c
k
 
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
3
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
X
 
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
3
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
`
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
 
$
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
s
s
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
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
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
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
6
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
r
i
t
e
r
i
o
n
.
l
a
b
e
l
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
l
i
>


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
}


 
 
 
 
 
 
<
/
u
l
>


 
 
 
 
<
/
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
>


 
 
)
;


}
)
;




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
 
F
o
r
g
o
t
P
a
s
s
w
o
r
d
P
a
g
e
(
)
 
{


 
 
c
o
n
s
t
 
n
a
v
i
g
a
t
e
 
=
 
u
s
e
N
a
v
i
g
a
t
e
(
)
;




 
 
c
o
n
s
t
 
[
s
t
e
p
,
 
s
e
t
S
t
e
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
1
 
|
 
2
>
(
1
)
;


 
 
c
o
n
s
t
 
[
e
m
a
i
l
,
 
s
e
t
E
m
a
i
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
"
)
;


 
 
c
o
n
s
t
 
[
o
t
p
,
 
s
e
t
O
t
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
s
t
r
i
n
g
[
]
>
(
[
"
"
,
 
"
"
,
 
"
"
,
 
"
"
,
 
"
"
,
 
"
"
]
)
;


 
 
c
o
n
s
t
 
[
n
e
w
P
a
s
s
w
o
r
d
,
 
s
e
t
N
e
w
P
a
s
s
w
o
r
d
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
"
)
;


 
 
c
o
n
s
t
 
[
c
o
n
f
i
r
m
P
a
s
s
w
o
r
d
,
 
s
e
t
C
o
n
f
i
r
m
P
a
s
s
w
o
r
d
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
"
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
P
a
s
s
w
o
r
d
,
 
s
e
t
S
h
o
w
P
a
s
s
w
o
r
d
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
f
a
l
s
e
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
C
o
n
f
i
r
m
P
a
s
s
w
o
r
d
,
 
s
e
t
S
h
o
w
C
o
n
f
i
r
m
P
a
s
s
w
o
r
d
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
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
[
e
r
r
o
r
,
 
s
e
t
E
r
r
o
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
o
a
d
i
n
g
,
 
s
e
t
L
o
a
d
i
n
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
f
a
l
s
e
)
;


 
 
c
o
n
s
t
 
i
n
p
u
t
R
e
f
s
 
=
 
u
s
e
R
e
f
<
(
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
 
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
[
]
)
;




 
 
/
/
 
F
o
c
u
s
 
f
i
r
s
t
 
O
T
P
 
i
n
p
u
t
 
w
h
e
n
 
e
n
t
e
r
i
n
g
 
s
t
e
p
 
2


 
 
u
s
e
E
f
f
e
c
t
(
(
)
 
=
>
 
{


 
 
 
 
i
f
 
(
s
t
e
p
 
=
=
=
 
2
)
 
{


 
 
 
 
 
 
i
n
p
u
t
R
e
f
s
.
c
u
r
r
e
n
t
[
0
]
?
.
f
o
c
u
s
(
)
;


 
 
 
 
}


 
 
}
,
 
[
s
t
e
p
]
)
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
S
e
n
d
C
o
d
e
 
=
 
a
s
y
n
c
 
(
e
:
 
R
e
a
c
t
.
F
o
r
m
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
s
e
t
E
r
r
o
r
(
"
"
)
;


 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
t
r
u
e
)
;


 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
(
"
/
a
u
t
h
/
f
o
r
g
o
t
-
p
a
s
s
w
o
r
d
"
,
 
{
 
e
m
a
i
l
 
}
)
;


 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
"
R
e
s
e
t
 
c
o
d
e
 
s
e
n
t
 
t
o
 
y
o
u
r
 
e
m
a
i
l
!
"
)
;


 
 
 
 
 
 
s
e
t
S
t
e
p
(
2
)
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
 
e
r
r
o
r
 
=
 
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
d
a
t
a
?
:
 
{
 
m
e
s
s
a
g
e
?
:
 
s
t
r
i
n
g
 
}
 
}
 
}
;


 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
e
r
r
o
r
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
m
e
s
s
a
g
e
 
|
|
 
"
F
a
i
l
e
d
 
t
o
 
s
e
n
d
 
r
e
s
e
t
 
c
o
d
e
"
)
;


 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
}


 
 
}
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
O
t
p
C
h
a
n
g
e
 
=
 
(
i
n
d
e
x
:
 
n
u
m
b
e
r
,
 
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
 
=
>
 
{


 
 
 
 
c
o
n
s
t
 
d
i
g
i
t
 
=
 
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
\
D
/
g
,
 
"
"
)
.
s
l
i
c
e
(
-
1
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
O
t
p
 
=
 
[
.
.
.
o
t
p
]
;


 
 
 
 
n
e
w
O
t
p
[
i
n
d
e
x
]
 
=
 
d
i
g
i
t
;


 
 
 
 
s
e
t
O
t
p
(
n
e
w
O
t
p
)
;




 
 
 
 
i
f
 
(
d
i
g
i
t
 
&
&
 
i
n
d
e
x
 
<
 
5
)
 
{


 
 
 
 
 
 
i
n
p
u
t
R
e
f
s
.
c
u
r
r
e
n
t
[
i
n
d
e
x
 
+
 
1
]
?
.
f
o
c
u
s
(
)
;


 
 
 
 
}


 
 
}
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
O
t
p
K
e
y
D
o
w
n
 
=
 
(
i
n
d
e
x
:
 
n
u
m
b
e
r
,
 
e
:
 
R
e
a
c
t
.
K
e
y
b
o
a
r
d
E
v
e
n
t
<
H
T
M
L
I
n
p
u
t
E
l
e
m
e
n
t
>
)
 
=
>
 
{


 
 
 
 
i
f
 
(
e
.
k
e
y
 
=
=
=
 
"
B
a
c
k
s
p
a
c
e
"
 
&
&
 
!
o
t
p
[
i
n
d
e
x
]
 
&
&
 
i
n
d
e
x
 
>
 
0
)
 
{


 
 
 
 
 
 
i
n
p
u
t
R
e
f
s
.
c
u
r
r
e
n
t
[
i
n
d
e
x
 
-
 
1
]
?
.
f
o
c
u
s
(
)
;


 
 
 
 
}


 
 
}
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
O
t
p
P
a
s
t
e
 
=
 
(
e
:
 
R
e
a
c
t
.
C
l
i
p
b
o
a
r
d
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
c
o
n
s
t
 
p
a
s
t
e
d
 
=
 
e
.
c
l
i
p
b
o
a
r
d
D
a
t
a
.
g
e
t
D
a
t
a
(
"
t
e
x
t
"
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
D
/
g
,
 
"
"
)
.
s
l
i
c
e
(
0
,
 
6
)
;


 
 
 
 
i
f
 
(
!
p
a
s
t
e
d
)
 
r
e
t
u
r
n
;


 
 
 
 
c
o
n
s
t
 
n
e
w
O
t
p
 
=
 
[
.
.
.
o
t
p
]
;


 
 
 
 
f
o
r
 
(
l
e
t
 
i
 
=
 
0
;
 
i
 
<
 
6
;
 
i
+
+
)
 
{


 
 
 
 
 
 
n
e
w
O
t
p
[
i
]
 
=
 
p
a
s
t
e
d
[
i
]
 
|
|
 
"
"
;


 
 
 
 
}


 
 
 
 
s
e
t
O
t
p
(
n
e
w
O
t
p
)
;


 
 
 
 
c
o
n
s
t
 
f
o
c
u
s
I
n
d
e
x
 
=
 
M
a
t
h
.
m
i
n
(
p
a
s
t
e
d
.
l
e
n
g
t
h
,
 
5
)
;


 
 
 
 
i
n
p
u
t
R
e
f
s
.
c
u
r
r
e
n
t
[
f
o
c
u
s
I
n
d
e
x
]
?
.
f
o
c
u
s
(
)
;


 
 
}
;




 
 
c
o
n
s
t
 
h
a
n
d
l
e
R
e
s
e
t
P
a
s
s
w
o
r
d
 
=
 
u
s
e
C
a
l
l
b
a
c
k
(


 
 
 
 
a
s
y
n
c
 
(
e
:
 
R
e
a
c
t
.
F
o
r
m
E
v
e
n
t
)
 
=
>
 
{


 
 
 
 
 
 
e
.
p
r
e
v
e
n
t
D
e
f
a
u
l
t
(
)
;


 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
"
"
)
;




 
 
 
 
 
 
c
o
n
s
t
 
c
o
d
e
 
=
 
o
t
p
.
j
o
i
n
(
"
"
)
;


 
 
 
 
 
 
i
f
 
(
c
o
d
e
.
l
e
n
g
t
h
 
!
=
=
 
6
)
 
{


 
 
 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
"
P
l
e
a
s
e
 
e
n
t
e
r
 
t
h
e
 
c
o
m
p
l
e
t
e
 
6
-
d
i
g
i
t
 
c
o
d
e
"
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}


 
 
 
 
 
 
i
f
 
(
n
e
w
P
a
s
s
w
o
r
d
.
l
e
n
g
t
h
 
<
 
8
)
 
{


 
 
 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
"
P
a
s
s
w
o
r
d
 
m
u
s
t
 
b
e
 
a
t
 
l
e
a
s
t
 
8
 
c
h
a
r
a
c
t
e
r
s
"
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}


 
 
 
 
 
 
i
f
 
(
!
/
[
A
-
Z
]
/
.
t
e
s
t
(
n
e
w
P
a
s
s
w
o
r
d
)
)
 
{


 
 
 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
"
P
a
s
s
w
o
r
d
 
m
u
s
t
 
c
o
n
t
a
i
n
 
a
t
 
l
e
a
s
t
 
o
n
e
 
u
p
p
e
r
c
a
s
e
 
l
e
t
t
e
r
"
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}


 
 
 
 
 
 
i
f
 
(
!
/
[
a
-
z
]
/
.
t
e
s
t
(
n
e
w
P
a
s
s
w
o
r
d
)
)
 
{


 
 
 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
"
P
a
s
s
w
o
r
d
 
m
u
s
t
 
c
o
n
t
a
i
n
 
a
t
 
l
e
a
s
t
 
o
n
e
 
l
o
w
e
r
c
a
s
e
 
l
e
t
t
e
r
"
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}


 
 
 
 
 
 
i
f
 
(
!
/
[
0
-
9
]
/
.
t
e
s
t
(
n
e
w
P
a
s
s
w
o
r
d
)
)
 
{


 
 
 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
"
P
a
s
s
w
o
r
d
 
m
u
s
t
 
c
o
n
t
a
i
n
 
a
t
 
l
e
a
s
t
 
o
n
e
 
n
u
m
b
e
r
"
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}


 
 
 
 
 
 
i
f
 
(
!
/
[
\
W
_
]
/
.
t
e
s
t
(
n
e
w
P
a
s
s
w
o
r
d
)
)
 
{


 
 
 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
"
P
a
s
s
w
o
r
d
 
m
u
s
t
 
c
o
n
t
a
i
n
 
a
t
 
l
e
a
s
t
 
o
n
e
 
s
p
e
c
i
a
l
 
c
h
a
r
a
c
t
e
r
"
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}


 
 
 
 
 
 
i
f
 
(
n
e
w
P
a
s
s
w
o
r
d
 
!
=
=
 
c
o
n
f
i
r
m
P
a
s
s
w
o
r
d
)
 
{


 
 
 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
"
P
a
s
s
w
o
r
d
s
 
d
o
 
n
o
t
 
m
a
t
c
h
"
)
;


 
 
 
 
 
 
 
 
r
e
t
u
r
n
;


 
 
 
 
 
 
}




 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
t
r
u
e
)
;


 
 
 
 
 
 
t
r
y
 
{


 
 
 
 
 
 
 
 
a
w
a
i
t
 
a
p
i
.
p
o
s
t
(
"
/
a
u
t
h
/
r
e
s
e
t
-
p
a
s
s
w
o
r
d
"
,
 
{
 
e
m
a
i
l
,
 
o
t
p
:
 
c
o
d
e
,
 
n
e
w
P
a
s
s
w
o
r
d
 
}
)
;


 
 
 
 
 
 
 
 
t
o
a
s
t
.
s
u
c
c
e
s
s
(
"
P
a
s
s
w
o
r
d
 
r
e
s
e
t
 
s
u
c
c
e
s
s
f
u
l
l
y
!
 
P
l
e
a
s
e
 
s
i
g
n
 
i
n
.
"
)
;


 
 
 
 
 
 
 
 
n
a
v
i
g
a
t
e
(
"
/
l
o
g
i
n
"
)
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
 
e
r
r
o
r
 
=
 
e
r
r
 
a
s
 
{
 
r
e
s
p
o
n
s
e
?
:
 
{
 
d
a
t
a
?
:
 
{
 
m
e
s
s
a
g
e
?
:
 
s
t
r
i
n
g
 
}
 
}
 
}
;


 
 
 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
e
r
r
o
r
.
r
e
s
p
o
n
s
e
?
.
d
a
t
a
?
.
m
e
s
s
a
g
e
 
|
|
 
"
F
a
i
l
e
d
 
t
o
 
r
e
s
e
t
 
p
a
s
s
w
o
r
d
"
)
;


 
 
 
 
 
 
}
 
f
i
n
a
l
l
y
 
{


 
 
 
 
 
 
 
 
s
e
t
L
o
a
d
i
n
g
(
f
a
l
s
e
)
;


 
 
 
 
 
 
}


 
 
 
 
}
,


 
 
 
 
[
o
t
p
,
 
n
e
w
P
a
s
s
w
o
r
d
,
 
c
o
n
f
i
r
m
P
a
s
s
w
o
r
d
,
 
e
m
a
i
l
,
 
n
a
v
i
g
a
t
e
]


 
 
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
m
i
n
-
h
-
s
c
r
e
e
n
 
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
 
b
g
-
g
r
a
y
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
g
r
a
y
-
9
5
0
"
>


 
 
 
 
 
 
<
S
E
O


 
 
 
 
 
 
 
 
t
i
t
l
e
=
"
F
o
r
g
o
t
 
P
a
s
s
w
o
r
d
"


 
 
 
 
 
 
 
 
d
e
s
c
r
i
p
t
i
o
n
=
"
R
e
s
e
t
 
y
o
u
r
 
I
n
t
e
r
n
H
a
c
k
 
p
a
s
s
w
o
r
d
.
 
E
n
t
e
r
 
y
o
u
r
 
e
m
a
i
l
 
t
o
 
r
e
c
e
i
v
e
 
a
 
r
e
s
e
t
 
c
o
d
e
.
"


 
 
 
 
 
 
 
 
n
o
I
n
d
e
x


 
 
 
 
 
 
/
>


 
 
 
 
 
 
<
N
a
v
b
a
r
 
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
-
1
 
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
c
e
n
t
e
r
 
p
x
-
4
 
p
t
-
2
4
 
p
b
-
1
2
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
 
o
p
a
c
i
t
y
:
 
0
,
 
y
:
 
2
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
 
o
p
a
c
i
t
y
:
 
1
,
 
y
:
 
0
 
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
w
-
f
u
l
l
 
m
a
x
-
w
-
m
d
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
t
e
x
t
-
c
e
n
t
e
r
 
m
b
-
8
"
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
1
 
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
2
x
l
 
f
o
n
t
-
b
o
l
d
 
m
t
-
6
 
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
=
=
=
 
1
 
?
 
"
F
o
r
g
o
t
 
P
a
s
s
w
o
r
d
"
 
:
 
"
R
e
s
e
t
 
P
a
s
s
w
o
r
d
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
1
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
g
r
a
y
-
5
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
g
r
a
y
-
5
0
0
 
m
t
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
=
=
=
 
1


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
E
n
t
e
r
 
y
o
u
r
 
e
m
a
i
l
 
t
o
 
r
e
c
e
i
v
e
 
a
 
r
e
s
e
t
 
c
o
d
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
E
n
t
e
r
 
t
h
e
 
c
o
d
e
 
a
n
d
 
y
o
u
r
 
n
e
w
 
p
a
s
s
w
o
r
d
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
=
=
=
 
2
 
&
&
 
e
m
a
i
l
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
 
m
t
-
1
"
>
{
e
m
a
i
l
}
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
{
s
t
e
p
 
=
=
=
 
1
 
?
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
f
o
r
m


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
S
u
b
m
i
t
=
{
h
a
n
d
l
e
S
e
n
d
C
o
d
e
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
g
r
a
y
-
9
0
0
 
p
-
8
 
r
o
u
n
d
e
d
-
2
x
l
 
s
h
a
d
o
w
-
s
m
 
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
g
r
a
y
-
1
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
g
r
a
y
-
8
0
0
 
s
p
a
c
e
-
y
-
5
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
r
r
o
r
 
&
&
 
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
p
-
3
 
b
g
-
r
e
d
-
5
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
r
e
d
-
2
0
0
 
r
o
u
n
d
e
d
-
l
g
 
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
r
e
d
-
6
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
r
r
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
m
 
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
 
t
e
x
t
-
g
r
a
y
-
7
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
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
E
m
a
i
l


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
e
m
a
i
l
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
e
m
a
i
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
E
m
a
i
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
f
u
l
l
 
p
x
-
4
 
p
y
-
2
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
g
r
a
y
-
3
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
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
x
l
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
b
l
a
c
k
 
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
g
r
a
y
-
8
0
0
 
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
 
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
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
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
-
g
r
a
y
-
5
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
@
e
x
a
m
p
l
e
.
c
o
m
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
q
u
i
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
s
c
a
l
e
:
 
1
.
0
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
9
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
s
u
b
m
i
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
l
o
a
d
i
n
g
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
f
u
l
l
 
p
y
-
3
 
b
g
-
b
l
a
c
k
 
t
e
x
t
-
w
h
i
t
e
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
r
o
u
n
d
e
d
-
x
l
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
8
0
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
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
 
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
g
r
a
y
-
9
5
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
g
-
g
r
a
y
-
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
a
d
i
n
g
 
?
 
"
S
e
n
d
i
n
g
.
.
.
"
 
:
 
"
S
e
n
d
 
R
e
s
e
t
 
C
o
d
e
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
n
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
c
e
n
t
e
r
 
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
g
r
a
y
-
5
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
g
r
a
y
-
5
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
R
e
m
e
m
b
e
r
 
y
o
u
r
 
p
a
s
s
w
o
r
d
?
{
"
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
L
i
n
k
 
t
o
=
"
/
l
o
g
i
n
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
t
e
x
t
-
b
l
a
c
k
 
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
w
h
i
t
e
 
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
 
h
o
v
e
r
:
u
n
d
e
r
l
i
n
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
S
i
g
n
 
i
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
L
i
n
k
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
f
o
r
m
>


 
 
 
 
 
 
 
 
 
 
)
 
:
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
f
o
r
m


 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
S
u
b
m
i
t
=
{
h
a
n
d
l
e
R
e
s
e
t
P
a
s
s
w
o
r
d
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
g
r
a
y
-
9
0
0
 
p
-
8
 
r
o
u
n
d
e
d
-
2
x
l
 
s
h
a
d
o
w
-
s
m
 
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
g
r
a
y
-
1
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
g
r
a
y
-
8
0
0
 
s
p
a
c
e
-
y
-
5
"


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
r
r
o
r
 
&
&
 
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
p
-
3
 
b
g
-
r
e
d
-
5
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
r
e
d
-
2
0
0
 
r
o
u
n
d
e
d
-
l
g
 
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
r
e
d
-
6
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
e
r
r
o
r
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
O
T
P
 
I
n
p
u
t
 
B
o
x
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
m
 
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
 
t
e
x
t
-
g
r
a
y
-
7
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
g
r
a
y
-
3
0
0
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
V
e
r
i
f
i
c
a
t
i
o
n
 
C
o
d
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
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
 
j
u
s
t
i
f
y
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
3
"
 
o
n
P
a
s
t
e
=
{
h
a
n
d
l
e
O
t
p
P
a
s
t
e
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
o
t
p
.
m
a
p
(
(
d
i
g
i
t
,
 
i
n
d
e
x
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
i
n
p
u
t


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
i
n
d
e
x
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
f
=
{
(
e
l
)
 
=
>
 
{
 
i
n
p
u
t
R
e
f
s
.
c
u
r
r
e
n
t
[
i
n
d
e
x
]
 
=
 
e
l
;
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
t
e
x
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
i
n
p
u
t
M
o
d
e
=
"
n
u
m
e
r
i
c
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
x
L
e
n
g
t
h
=
{
1
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
d
i
g
i
t
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
 
h
a
n
d
l
e
O
t
p
C
h
a
n
g
e
(
i
n
d
e
x
,
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
o
n
K
e
y
D
o
w
n
=
{
(
e
)
 
=
>
 
h
a
n
d
l
e
O
t
p
K
e
y
D
o
w
n
(
i
n
d
e
x
,
 
e
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
l
o
a
d
i
n
g
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
{
`
V
e
r
i
f
i
c
a
t
i
o
n
 
c
o
d
e
 
d
i
g
i
t
 
$
{
i
n
d
e
x
 
+
 
1
}
`
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
0
 
h
-
1
2
 
s
m
:
w
-
1
2
 
s
m
:
h
-
1
4
 
t
e
x
t
-
c
e
n
t
e
r
 
t
e
x
t
-
l
g
 
s
m
:
t
e
x
t
-
x
l
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
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
g
r
a
y
-
3
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
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
x
l
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
b
l
a
c
k
 
d
a
r
k
:
f
o
c
u
s
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
g
r
a
y
-
8
0
0
 
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
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
/
d
i
v
>




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
N
e
w
 
P
a
s
s
w
o
r
d
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
m
 
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
 
t
e
x
t
-
g
r
a
y
-
7
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
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
N
e
w
 
P
a
s
s
w
o
r
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
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
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
s
h
o
w
P
a
s
s
w
o
r
d
 
?
 
"
t
e
x
t
"
 
:
 
"
p
a
s
s
w
o
r
d
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
n
e
w
P
a
s
s
w
o
r
d
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
N
e
w
P
a
s
s
w
o
r
d
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
f
u
l
l
 
p
x
-
4
 
p
y
-
2
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
g
r
a
y
-
3
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
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
x
l
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
b
l
a
c
k
 
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
 
p
r
-
1
0
 
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
g
r
a
y
-
8
0
0
 
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
 
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
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
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
-
g
r
a
y
-
5
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
M
i
n
.
 
8
 
c
h
a
r
s
 
(
A
-
Z
,
 
a
-
z
,
 
0
-
9
,
 
s
y
m
b
o
l
)
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
q
u
i
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
L
e
n
g
t
h
=
{
8
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
e
t
S
h
o
w
P
a
s
s
w
o
r
d
(
!
s
h
o
w
P
a
s
s
w
o
r
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
{
s
h
o
w
P
a
s
s
w
o
r
d
 
?
 
"
H
i
d
e
 
p
a
s
s
w
o
r
d
"
 
:
 
"
S
h
o
w
 
p
a
s
s
w
o
r
d
"
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
a
b
s
o
l
u
t
e
 
r
i
g
h
t
-
3
 
t
o
p
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
y
-
1
/
2
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
g
r
a
y
-
6
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
t
e
x
t
-
g
r
a
y
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
P
a
s
s
w
o
r
d
 
?
 
<
E
y
e
O
f
f
 
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
 
:
 
<
E
y
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
w
-
4
 
h
-
4
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
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
 
i
d
=
"
p
a
s
s
w
o
r
d
-
s
t
r
e
n
g
t
h
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
e
w
P
a
s
s
w
o
r
d
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
P
a
s
s
w
o
r
d
S
t
r
e
n
g
t
h
I
n
d
i
c
a
t
o
r
 
p
a
s
s
w
o
r
d
=
{
n
e
w
P
a
s
s
w
o
r
d
}
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
A
n
i
m
a
t
e
P
r
e
s
e
n
c
e
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




 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
o
n
f
i
r
m
 
P
a
s
s
w
o
r
d
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
s
m
 
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
 
t
e
x
t
-
g
r
a
y
-
7
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
g
r
a
y
-
3
0
0
 
m
b
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
o
n
f
i
r
m
 
P
a
s
s
w
o
r
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
l
a
b
e
l
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
r
e
l
a
t
i
v
e
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
{
s
h
o
w
C
o
n
f
i
r
m
P
a
s
s
w
o
r
d
 
?
 
"
t
e
x
t
"
 
:
 
"
p
a
s
s
w
o
r
d
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
v
a
l
u
e
=
{
c
o
n
f
i
r
m
P
a
s
s
w
o
r
d
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
C
o
n
f
i
r
m
P
a
s
s
w
o
r
d
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
f
u
l
l
 
p
x
-
4
 
p
y
-
2
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
g
r
a
y
-
3
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
g
r
a
y
-
6
0
0
 
r
o
u
n
d
e
d
-
x
l
 
f
o
c
u
s
:
o
u
t
l
i
n
e
-
n
o
n
e
 
f
o
c
u
s
:
r
i
n
g
-
2
 
f
o
c
u
s
:
r
i
n
g
-
b
l
a
c
k
/
2
0
 
d
a
r
k
:
f
o
c
u
s
:
r
i
n
g
-
w
h
i
t
e
/
2
0
 
f
o
c
u
s
:
b
o
r
d
e
r
-
b
l
a
c
k
 
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
 
p
r
-
1
0
 
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
g
r
a
y
-
8
0
0
 
t
e
x
t
-
g
r
a
y
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
w
h
i
t
e
 
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
-
g
r
a
y
-
4
0
0
 
d
a
r
k
:
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
-
g
r
a
y
-
5
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
R
e
-
e
n
t
e
r
 
y
o
u
r
 
p
a
s
s
w
o
r
d
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
e
q
u
i
r
e
d


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
i
n
L
e
n
g
t
h
=
{
8
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
s
e
t
S
h
o
w
C
o
n
f
i
r
m
P
a
s
s
w
o
r
d
(
!
s
h
o
w
C
o
n
f
i
r
m
P
a
s
s
w
o
r
d
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
a
r
i
a
-
l
a
b
e
l
=
{
s
h
o
w
C
o
n
f
i
r
m
P
a
s
s
w
o
r
d
 
?
 
"
H
i
d
e
 
c
o
n
f
i
r
m
 
p
a
s
s
w
o
r
d
"
 
:
 
"
S
h
o
w
 
c
o
n
f
i
r
m
 
p
a
s
s
w
o
r
d
"
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
a
b
s
o
l
u
t
e
 
r
i
g
h
t
-
3
 
t
o
p
-
1
/
2
 
-
t
r
a
n
s
l
a
t
e
-
y
-
1
/
2
 
t
e
x
t
-
g
r
a
y
-
4
0
0
 
h
o
v
e
r
:
t
e
x
t
-
g
r
a
y
-
6
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
t
e
x
t
-
g
r
a
y
-
3
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
h
o
w
C
o
n
f
i
r
m
P
a
s
s
w
o
r
d
 
?
 
<
E
y
e
O
f
f
 
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
 
:
 
<
E
y
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
w
-
4
 
h
-
4
"
 
/
>
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
b
u
t
t
o
n
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




 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
b
u
t
t
o
n


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
H
o
v
e
r
=
{
{
 
s
c
a
l
e
:
 
1
.
0
1
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
w
h
i
l
e
T
a
p
=
{
{
 
s
c
a
l
e
:
 
0
.
9
9
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
y
p
e
=
"
s
u
b
m
i
t
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
a
b
l
e
d
=
{
l
o
a
d
i
n
g
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
f
u
l
l
 
p
y
-
3
 
b
g
-
b
l
a
c
k
 
t
e
x
t
-
w
h
i
t
e
 
f
o
n
t
-
s
e
m
i
b
o
l
d
 
r
o
u
n
d
e
d
-
x
l
 
h
o
v
e
r
:
b
g
-
g
r
a
y
-
8
0
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
 
d
i
s
a
b
l
e
d
:
o
p
a
c
i
t
y
-
5
0
 
d
i
s
a
b
l
e
d
:
c
u
r
s
o
r
-
n
o
t
-
a
l
l
o
w
e
d
 
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
g
r
a
y
-
9
5
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
g
-
g
r
a
y
-
2
0
0
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
l
o
a
d
i
n
g
 
?
 
"
R
e
s
e
t
t
i
n
g
.
.
.
"
 
:
 
"
R
e
s
e
t
 
P
a
s
s
w
o
r
d
"
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
m
o
t
i
o
n
.
b
u
t
t
o
n
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
c
e
n
t
e
r
 
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
g
r
a
y
-
5
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
g
r
a
y
-
5
0
0
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
S
t
e
p
(
1
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
O
t
p
(
[
"
"
,
 
"
"
,
 
"
"
,
 
"
"
,
 
"
"
,
 
"
"
]
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
N
e
w
P
a
s
s
w
o
r
d
(
"
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
C
o
n
f
i
r
m
P
a
s
s
w
o
r
d
(
"
"
)
;


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
e
t
E
r
r
o
r
(
"
"
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
t
e
x
t
-
b
l
a
c
k
 
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
w
h
i
t
e
 
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
 
h
o
v
e
r
:
u
n
d
e
r
l
i
n
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
T
r
y
 
a
 
d
i
f
f
e
r
e
n
t
 
e
m
a
i
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
p
>


 
 
 
 
 
 
 
 
 
 
 
 
<
/
f
o
r
m
>


 
 
 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
<
/
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


