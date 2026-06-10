
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
 
u
s
e
Q
u
e
r
y
 
}
 
f
r
o
m
 
"
@
t
a
n
s
t
a
c
k
/
r
e
a
c
t
-
q
u
e
r
y
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
w
a
r
d
 
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
 
q
u
e
r
y
K
e
y
s
 
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
l
i
b
/
q
u
e
r
y
-
k
e
y
s
"
;


i
m
p
o
r
t
 
t
y
p
e
 
{
 
S
t
u
d
e
n
t
B
a
d
g
e
 
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
l
i
b
/
t
y
p
e
s
"
;




c
o
n
s
t
 
f
a
d
e
I
n
U
p
 
=
 
{


 
 
h
i
d
d
e
n
:
 
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
,


 
 
v
i
s
i
b
l
e
:
 
(
i
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
 
(
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
,


 
 
 
 
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
 
{
 
d
e
l
a
y
:
 
i
 
*
 
0
.
0
8
,
 
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
4
 
}
,


 
 
}
)
,


}
;




c
o
n
s
t
 
c
a
t
e
g
o
r
y
C
o
l
o
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
>
 
=
 
{


 
 
C
A
R
E
E
R
:
 
"
b
g
-
i
n
d
i
g
o
-
5
0
0
"
,


 
 
Q
U
I
Z
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
5
0
0
"
,


 
 
S
K
I
L
L
:
 
"
b
g
-
e
m
e
r
a
l
d
-
5
0
0
"
,


 
 
C
O
N
T
R
I
B
U
T
I
O
N
:
 
"
b
g
-
p
u
r
p
l
e
-
5
0
0
"
,


 
 
M
I
L
E
S
T
O
N
E
:
 
"
b
g
-
r
o
s
e
-
5
0
0
"
,


}
;




c
o
n
s
t
 
c
a
t
e
g
o
r
y
L
a
b
e
l
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
>
 
=
 
{


 
 
C
A
R
E
E
R
:
 
"
C
a
r
e
e
r
"
,


 
 
Q
U
I
Z
:
 
"
Q
u
i
z
"
,


 
 
S
K
I
L
L
:
 
"
S
k
i
l
l
"
,


 
 
C
O
N
T
R
I
B
U
T
I
O
N
:
 
"
C
o
n
t
r
i
b
u
t
i
o
n
"
,


 
 
M
I
L
E
S
T
O
N
E
:
 
"
M
i
l
e
s
t
o
n
e
"
,


}
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
 
B
a
d
g
e
s
S
e
c
t
i
o
n
P
r
o
p
s
 
{


 
 
s
t
u
d
e
n
t
I
d
?
:
 
n
u
m
b
e
r
;


 
 
s
h
o
w
T
i
t
l
e
?
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
 
B
a
d
g
e
s
S
e
c
t
i
o
n
(
{
 
s
t
u
d
e
n
t
I
d
,
 
s
h
o
w
T
i
t
l
e
 
=
 
t
r
u
e
 
}
:
 
B
a
d
g
e
s
S
e
c
t
i
o
n
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
 
{
 
d
a
t
a
,
 
i
s
L
o
a
d
i
n
g
 
}
 
=
 
u
s
e
Q
u
e
r
y
(
{


 
 
 
 
q
u
e
r
y
K
e
y
:
 
s
t
u
d
e
n
t
I
d


 
 
 
 
 
 
?
 
q
u
e
r
y
K
e
y
s
.
b
a
d
g
e
s
.
s
t
u
d
e
n
t
(
s
t
u
d
e
n
t
I
d
)


 
 
 
 
 
 
:
 
q
u
e
r
y
K
e
y
s
.
b
a
d
g
e
s
.
m
y
(
)
,


 
 
 
 
q
u
e
r
y
F
n
:
 
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
 
u
r
l
 
=
 
s
t
u
d
e
n
t
I
d
 
?
 
`
/
b
a
d
g
e
s
/
s
t
u
d
e
n
t
/
$
{
s
t
u
d
e
n
t
I
d
}
`
 
:
 
"
/
b
a
d
g
e
s
/
m
y
"
;


 
 
 
 
 
 
c
o
n
s
t
 
r
e
s
 
=
 
a
w
a
i
t
 
a
p
i
.
g
e
t
(
u
r
l
)
;


 
 
 
 
 
 
r
e
t
u
r
n
 
r
e
s
.
d
a
t
a
 
a
s
 
{
 
b
a
d
g
e
s
:
 
S
t
u
d
e
n
t
B
a
d
g
e
[
]
 
}
;


 
 
 
 
}
,


 
 
}
)
;




 
 
c
o
n
s
t
 
b
a
d
g
e
s
 
=
 
d
a
t
a
?
.
b
a
d
g
e
s
 
?
?
 
[
]
;




 
 
i
f
 
(
i
s
L
o
a
d
i
n
g
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
>


 
 
 
 
 
 
 
 
{
s
h
o
w
T
i
t
l
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
h
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
t
e
x
t
-
l
g
 
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
b
-
4
 
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
A
w
a
r
d
 
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
5
 
h
-
5
 
t
e
x
t
-
i
n
d
i
g
o
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
B
a
d
g
e
s


 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
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
2
 
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
3
 
m
d
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
4
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
 
 
{
[
1
,
 
2
,
 
3
,
 
4
]
.
m
a
p
(
(
i
)
 
=
>
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
k
e
y
=
{
i
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
3
2
 
b
g
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
 
a
n
i
m
a
t
e
-
p
u
l
s
e
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


 
 
 
 
)
;


 
 
}




 
 
i
f
 
(
b
a
d
g
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
>


 
 
 
 
 
 
 
 
{
s
h
o
w
T
i
t
l
e
 
&
&
 
(


 
 
 
 
 
 
 
 
 
 
<
h
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
t
e
x
t
-
l
g
 
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
b
-
4
 
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
A
w
a
r
d
 
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
5
 
h
-
5
 
t
e
x
t
-
i
n
d
i
g
o
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
B
a
d
g
e
s


 
 
 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
 
 
)
}


 
 
 
 
 
 
 
 
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
 
p
y
-
1
2
 
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
"
>


 
 
 
 
 
 
 
 
 
 
<
A
w
a
r
d
 
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
0
 
m
x
-
a
u
t
o
 
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
6
0
0
 
m
b
-
3
"
 
/
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
 
t
e
x
t
-
s
m
"
>
N
o
 
b
a
d
g
e
s
 
e
a
r
n
e
d
 
y
e
t
<
/
p
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
>


 
 
 
 
 
 
{
s
h
o
w
T
i
t
l
e
 
&
&
 
(


 
 
 
 
 
 
 
 
<
h
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
t
e
x
t
-
l
g
 
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
b
-
4
 
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
A
w
a
r
d
 
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
5
 
h
-
5
 
t
e
x
t
-
i
n
d
i
g
o
-
5
0
0
"
 
/
>


 
 
 
 
 
 
 
 
 
 
B
a
d
g
e
s


 
 
 
 
 
 
 
 
 
 
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
n
o
r
m
a
l
 
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
 
m
l
-
1
"
>
(
{
b
a
d
g
e
s
.
l
e
n
g
t
h
}
)
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
<
/
h
2
>


 
 
 
 
 
 
)
}


 
 
 
 
 
 
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
2
 
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
3
 
m
d
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
4
 
g
a
p
-
4
"
>


 
 
 
 
 
 
 
 
{
b
a
d
g
e
s
.
m
a
p
(
(
s
b
,
 
i
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
s
b
.
i
d
}


 
 
 
 
 
 
 
 
 
 
 
 
c
u
s
t
o
m
=
{
i
}


 
 
 
 
 
 
 
 
 
 
 
 
i
n
i
t
i
a
l
=
"
h
i
d
d
e
n
"


 
 
 
 
 
 
 
 
 
 
 
 
a
n
i
m
a
t
e
=
"
v
i
s
i
b
l
e
"


 
 
 
 
 
 
 
 
 
 
 
 
v
a
r
i
a
n
t
s
=
{
f
a
d
e
I
n
U
p
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
4
 
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
h
a
d
o
w
-
s
m
 
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
"


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
/
*
 
B
a
d
g
e
 
i
c
o
n
 
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
 
*
/
}


 
 
 
 
 
 
 
 
 
 
 
 
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
w
-
1
2
 
h
-
1
2
 
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
 
$
{
c
a
t
e
g
o
r
y
C
o
l
o
r
s
[
s
b
.
b
a
d
g
e
.
c
a
t
e
g
o
r
y
]
 
|
|
 
"
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
0
"
}
 
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
 
m
x
-
a
u
t
o
 
m
b
-
3
 
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
 
t
e
x
t
-
l
g
 
f
o
n
t
-
b
o
l
d
`
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
b
.
b
a
d
g
e
.
n
a
m
e
.
c
h
a
r
A
t
(
0
)
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
<
h
3
 
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
s
e
m
i
b
o
l
d
 
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
b
-
1
 
l
i
n
e
-
c
l
a
m
p
-
1
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
s
b
.
b
a
d
g
e
.
n
a
m
e
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
h
3
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
 
b
l
o
c
k
 
m
b
-
2
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
a
t
e
g
o
r
y
L
a
b
e
l
s
[
s
b
.
b
a
d
g
e
.
c
a
t
e
g
o
r
y
]
 
|
|
 
s
b
.
b
a
d
g
e
.
c
a
t
e
g
o
r
y
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
g
r
a
y
-
4
0
0
"
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
n
e
w
 
D
a
t
e
(
s
b
.
e
a
r
n
e
d
A
t
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
/
d
i
v
>


 
 
)
;


}


