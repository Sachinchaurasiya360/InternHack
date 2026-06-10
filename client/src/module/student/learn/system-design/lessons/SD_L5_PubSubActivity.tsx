
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
R
e
f
,
 
u
s
e
S
t
a
t
e
,
 
t
y
p
e
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
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
,
 
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
 
B
o
o
k
O
p
e
n
,
 
G
l
o
b
e
,
 
P
a
u
s
e
,
 
P
l
a
y
,
 
R
a
d
i
o
,
 
R
o
t
a
t
e
C
c
w
 
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
 
E
n
g
i
n
e
e
r
i
n
g
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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
 
t
y
p
e
 
{
 
E
n
g
T
a
b
D
e
f
,
 
E
n
g
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
 
}
 
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
e
n
g
i
n
e
e
r
i
n
g
/
E
n
g
i
n
e
e
r
i
n
g
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




c
o
n
s
t
 
S
D
 
=
 
"
#
8
4
c
c
1
6
"
;


c
o
n
s
t
 
N
E
U
T
R
A
L
 
=
 
"
#
6
4
7
4
8
b
"
;


c
o
n
s
t
 
P
U
R
P
L
E
 
=
 
"
#
8
b
5
c
f
6
"
;


c
o
n
s
t
 
M
O
N
O
 
=
 
'
"
J
e
t
B
r
a
i
n
s
 
M
o
n
o
"
,
 
M
e
n
l
o
,
 
C
o
n
s
o
l
a
s
,
 
m
o
n
o
s
p
a
c
e
'
;




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
T
i
t
l
e
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
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
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
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
o
n
t
S
i
z
e
:
 
"
1
.
1
5
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
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
 
0
 
1
2
p
x
"
,


}
;


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
D
e
s
c
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
=
 
{


 
 
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
 
"
v
a
r
(
-
-
e
n
g
-
f
o
n
t
)
"
,


 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
2
r
e
m
"
,


 
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
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
 
0
 
2
0
p
x
"
,


 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
5
,


}
;




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
1
 
-
 
D
e
f
i
n
i
t
i
o
n
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
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
 
D
e
f
i
n
i
t
i
o
n
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
S
a
m
e
 
b
r
o
k
e
r
.
 
D
i
f
f
e
r
e
n
t
 
r
o
u
t
i
n
g
 
s
e
m
a
n
t
i
c
s
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
B
o
t
h
 
p
a
t
t
e
r
n
s
 
r
e
c
e
i
v
e
 
a
 
m
e
s
s
a
g
e
 
a
n
d
 
f
o
r
w
a
r
d
 
i
t
 
t
o
 
c
o
n
s
u
m
e
r
s
.
 
T
h
e
 
d
i
f
f
e
r
e
n
c
e
 
i
s
{
"
 
"
}


 
 
 
 
 
 
 
 
<
b
>
w
h
o
 
g
e
t
s
 
t
h
e
 
m
e
s
s
a
g
e
<
/
b
>
.
 
I
n
 
a
 
q
u
e
u
e
,
 
e
x
a
c
t
l
y
 
o
n
e
 
c
o
n
s
u
m
e
r
 
w
i
n
s
.
 
I
n
 
p
u
b
/
s
u
b
,
 
e
v
e
r
y


 
 
 
 
 
 
 
 
s
u
b
s
c
r
i
b
e
r
 
g
e
t
s
 
a
 
c
o
p
y
.


 
 
 
 
 
 
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
2
 
g
a
p
-
3
 
m
b
-
6
"
>


 
 
 
 
 
 
 
 
{
[


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
:
 
"
Q
u
e
u
e
 
(
w
o
r
k
 
d
i
s
t
r
i
b
u
t
i
o
n
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
S
D
,


 
 
 
 
 
 
 
 
 
 
 
 
t
a
g
l
i
n
e
:
 
"
O
n
e
 
m
e
s
s
a
g
e
 
→
 
o
n
e
 
c
o
n
s
u
m
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
w
h
o
:
 
"
W
o
r
k
e
r
s
 
c
o
m
p
e
t
i
n
g
 
f
o
r
 
t
a
s
k
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
e
x
:
 
"
I
m
a
g
e
 
r
e
s
i
z
i
n
g
 
j
o
b
,
 
e
m
a
i
l
 
s
e
n
d
,
 
o
r
d
e
r
 
p
r
o
c
e
s
s
i
n
g
"
,


 
 
 
 
 
 
 
 
 
 
 
 
n
o
t
e
:
 
"
A
d
d
i
n
g
 
m
o
r
e
 
c
o
n
s
u
m
e
r
s
 
s
p
r
e
a
d
s
 
w
o
r
k
.
 
E
a
c
h
 
m
e
s
s
a
g
e
 
i
s
 
p
r
o
c
e
s
s
e
d
 
e
x
a
c
t
l
y
 
o
n
c
e
 
a
c
r
o
s
s
 
t
h
e
 
c
o
n
s
u
m
e
r
 
p
o
o
l
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
 
 
{


 
 
 
 
 
 
 
 
 
 
 
 
n
a
m
e
:
 
"
P
u
b
/
S
u
b
 
(
b
r
o
a
d
c
a
s
t
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
P
U
R
P
L
E
,


 
 
 
 
 
 
 
 
 
 
 
 
t
a
g
l
i
n
e
:
 
"
O
n
e
 
m
e
s
s
a
g
e
 
→
 
a
l
l
 
s
u
b
s
c
r
i
b
e
r
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
w
h
o
:
 
"
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
 
s
e
r
v
i
c
e
s
 
r
e
a
c
t
i
n
g
 
t
o
 
e
v
e
n
t
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
e
x
:
 
"
O
r
d
e
r
 
p
l
a
c
e
d
 
→
 
e
m
a
i
l
 
s
e
r
v
i
c
e
 
+
 
a
n
a
l
y
t
i
c
s
 
+
 
i
n
v
e
n
t
o
r
y
 
a
l
l
 
r
e
a
c
t
"
,


 
 
 
 
 
 
 
 
 
 
 
 
n
o
t
e
:
 
"
A
d
d
i
n
g
 
m
o
r
e
 
s
u
b
s
c
r
i
b
e
r
s
 
a
d
d
s
 
m
o
r
e
 
r
e
a
c
t
i
o
n
s
.
 
E
a
c
h
 
s
u
b
s
c
r
i
b
e
r
 
g
e
t
s
 
i
t
s
 
o
w
n
 
c
o
p
y
 
a
n
d
 
t
r
a
c
k
s
 
i
t
s
 
o
w
n
 
p
r
o
g
r
e
s
s
.
"
,


 
 
 
 
 
 
 
 
 
 
}
,


 
 
 
 
 
 
 
 
]
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
p
.
n
a
m
e
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
 
y
:
 
1
2
 
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
5
,
 
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
1
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
8
p
x
 
2
0
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
p
.
c
o
l
o
r
}
5
5
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
p
.
c
o
l
o
r
}
0
8
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
d
i
s
p
l
a
y
:
 
"
f
l
e
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
l
e
x
D
i
r
e
c
t
i
o
n
:
 
"
c
o
l
u
m
n
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
g
a
p
:
 
1
0
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
1
r
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>
{
p
.
n
a
m
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
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
p
.
c
o
l
o
r
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
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
6
e
m
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
t
a
g
l
i
n
e
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


 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
 
"
0
.
8
6
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
b
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>
{
p
.
w
h
o
}
.
<
/
b
>
 
{
p
.
n
o
t
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
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
T
o
p
:
 
8
,
 
b
o
r
d
e
r
T
o
p
:
 
`
1
p
x
 
d
a
s
h
e
d
 
$
{
p
.
c
o
l
o
r
}
3
3
`
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
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
4
r
e
m
"
,
 
c
o
l
o
r
:
 
p
.
c
o
l
o
r
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
W
e
i
g
h
t
:
 
8
0
0
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
4
 
}
}
>
E
X
 
·
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
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>
{
p
.
e
x
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
d
i
v
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
d
i
v
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
 
}
}
>


 
 
 
 
 
 
 
 
<
d
i
v
 
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
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
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
 
8
0
0
,
 
c
o
l
o
r
:
 
S
D
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
6
 
}
}
>


 
 
 
 
 
 
 
 
 
 
R
E
A
L
 
E
X
A
M
P
L
E
S


 
 
 
 
 
 
 
 
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
 
"
0
.
8
6
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
7
 
}
}
>


 
 
 
 
 
 
 
 
 
 
<
b
>
K
a
f
k
a
 
c
o
n
s
u
m
e
r
 
g
r
o
u
p
s
<
/
b
>
 
a
r
e
 
t
h
e
 
e
l
e
g
a
n
t
 
u
n
i
f
i
c
a
t
i
o
n
:
 
m
e
s
s
a
g
e
s
 
w
i
t
h
i
n
 
a
 
p
a
r
t
i
t
i
o
n


 
 
 
 
 
 
 
 
 
 
a
r
e
 
q
u
e
u
e
d
 
a
c
r
o
s
s
 
t
h
e
 
g
r
o
u
p
 
(
w
o
r
k
 
d
i
s
t
r
i
b
u
t
i
o
n
)
;
 
d
i
f
f
e
r
e
n
t
 
c
o
n
s
u
m
e
r
 
g
r
o
u
p
s
 
e
a
c
h
 
g
e
t


 
 
 
 
 
 
 
 
 
 
t
h
e
i
r
 
o
w
n
 
c
o
p
y
 
(
p
u
b
/
s
u
b
)
.
 
<
b
>
S
N
S
 
+
 
S
Q
S
<
/
b
>
 
o
n
 
A
W
S
 
p
a
i
r
s
 
b
r
o
a
d
c
a
s
t
 
t
o
p
i
c
 
+
 
p
e
r
-
s
e
r
v
i
c
e


 
 
 
 
 
 
 
 
 
 
q
u
e
u
e
 
f
o
r
 
t
h
e
 
s
a
m
e
 
e
f
f
e
c
t
.
 
<
b
>
R
e
d
i
s
 
P
u
b
/
S
u
b
<
/
b
>
 
i
s
 
f
i
r
e
-
a
n
d
-
f
o
r
g
e
t
 
p
u
b
/
s
u
b
;
 
<
b
>
R
e
d
i
s


 
 
 
 
 
 
 
 
 
 
S
t
r
e
a
m
s
<
/
b
>
 
a
r
e
 
t
h
e
 
q
u
e
u
e
 
e
q
u
i
v
a
l
e
n
t
.


 
 
 
 
 
 
 
 
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
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
2
 
-
 
A
n
i
m
a
t
e
d
 
m
o
d
e
 
t
o
g
g
l
e
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




t
y
p
e
 
M
o
d
e
 
=
 
"
q
u
e
u
e
"
 
|
 
"
p
u
b
s
u
b
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
 
P
a
c
k
e
t
 
{


 
 
i
d
:
 
n
u
m
b
e
r
;


 
 
t
o
:
 
n
u
m
b
e
r
;
 
/
/
 
c
o
n
s
u
m
e
r
 
i
n
d
e
x
,
 
-
1
 
m
e
a
n
s
 
a
l
l


 
 
f
r
o
m
:
 
n
u
m
b
e
r
;
 
/
/
 
0
 
p
r
o
d
u
c
e
r


}




c
o
n
s
t
 
C
O
N
S
U
M
E
R
S
 
=
 
3
;




f
u
n
c
t
i
o
n
 
M
o
d
e
D
e
m
o
(
)
 
{


 
 
c
o
n
s
t
 
[
m
o
d
e
,
 
s
e
t
M
o
d
e
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
M
o
d
e
>
(
"
q
u
e
u
e
"
)
;


 
 
c
o
n
s
t
 
[
r
u
n
n
i
n
g
,
 
s
e
t
R
u
n
n
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
t
r
u
e
)
;


 
 
c
o
n
s
t
 
[
p
a
c
k
e
t
s
,
 
s
e
t
P
a
c
k
e
t
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
P
a
c
k
e
t
[
]
>
(
[
]
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
u
n
t
s
,
 
s
e
t
C
o
u
n
t
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
n
u
m
b
e
r
[
]
>
(
A
r
r
a
y
(
C
O
N
S
U
M
E
R
S
)
.
f
i
l
l
(
0
)
)
;


 
 
c
o
n
s
t
 
[
t
o
t
a
l
S
e
n
t
,
 
s
e
t
T
o
t
a
l
S
e
n
t
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
0
)
;


 
 
c
o
n
s
t
 
i
d
R
e
f
 
=
 
u
s
e
R
e
f
(
0
)
;


 
 
c
o
n
s
t
 
r
o
b
i
n
R
e
f
 
=
 
u
s
e
R
e
f
(
0
)
;




 
 
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
!
r
u
n
n
i
n
g
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
 
h
a
n
d
l
e
 
=
 
s
e
t
I
n
t
e
r
v
a
l
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
 
i
d
 
=
 
+
+
i
d
R
e
f
.
c
u
r
r
e
n
t
;


 
 
 
 
 
 
s
e
t
T
o
t
a
l
S
e
n
t
(
(
t
)
 
=
>
 
t
 
+
 
1
)
;


 
 
 
 
 
 
i
f
 
(
m
o
d
e
 
=
=
=
 
"
q
u
e
u
e
"
)
 
{


 
 
 
 
 
 
 
 
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
 
r
o
b
i
n
R
e
f
.
c
u
r
r
e
n
t
 
%
 
C
O
N
S
U
M
E
R
S
;


 
 
 
 
 
 
 
 
r
o
b
i
n
R
e
f
.
c
u
r
r
e
n
t
 
+
=
 
1
;


 
 
 
 
 
 
 
 
s
e
t
P
a
c
k
e
t
s
(
(
p
s
)
 
=
>
 
[
.
.
.
p
s
,
 
{
 
i
d
,
 
t
o
:
 
t
a
r
g
e
t
,
 
f
r
o
m
:
 
0
 
}
]
)
;


 
 
 
 
 
 
 
 
s
e
t
C
o
u
n
t
s
(
(
c
)
 
=
>
 
c
.
m
a
p
(
(
v
,
 
i
)
 
=
>
 
(
i
 
=
=
=
 
t
a
r
g
e
t
 
?
 
v
 
+
 
1
 
:
 
v
)
)
)
;


 
 
 
 
 
 
}
 
e
l
s
e
 
{


 
 
 
 
 
 
 
 
/
/
 
p
u
b
/
s
u
b
:
 
o
n
e
 
p
a
c
k
e
t
 
p
e
r
 
c
o
n
s
u
m
e
r


 
 
 
 
 
 
 
 
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
 
C
O
N
S
U
M
E
R
S
;
 
i
+
+
)
 
{


 
 
 
 
 
 
 
 
 
 
s
e
t
P
a
c
k
e
t
s
(
(
p
s
)
 
=
>
 
[
.
.
.
p
s
,
 
{
 
i
d
:
 
i
d
 
*
 
1
0
0
 
+
 
i
,
 
t
o
:
 
i
,
 
f
r
o
m
:
 
0
 
}
]
)
;


 
 
 
 
 
 
 
 
}


 
 
 
 
 
 
 
 
s
e
t
C
o
u
n
t
s
(
(
c
)
 
=
>
 
c
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
 
v
 
+
 
1
)
)
;


 
 
 
 
 
 
}


 
 
 
 
}
,
 
1
5
0
0
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
c
l
e
a
r
I
n
t
e
r
v
a
l
(
h
a
n
d
l
e
)
;


 
 
}
,
 
[
r
u
n
n
i
n
g
,
 
m
o
d
e
]
)
;




 
 
/
/
 
C
l
e
a
n
 
u
p
 
p
a
c
k
e
t
s
 
a
f
t
e
r
 
t
h
e
y
 
f
i
n
i
s
h
 
a
n
i
m
a
t
i
n
g


 
 
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
p
a
c
k
e
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
 
h
a
n
d
l
e
 
=
 
s
e
t
T
i
m
e
o
u
t
(
(
)
 
=
>
 
{


 
 
 
 
 
 
s
e
t
P
a
c
k
e
t
s
(
(
p
s
)
 
=
>
 
p
s
.
s
l
i
c
e
(
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
 
p
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
2
)
)
)
;


 
 
 
 
}
,
 
1
6
0
0
)
;


 
 
 
 
r
e
t
u
r
n
 
(
)
 
=
>
 
c
l
e
a
r
T
i
m
e
o
u
t
(
h
a
n
d
l
e
)
;


 
 
}
,
 
[
p
a
c
k
e
t
s
]
)
;




 
 
c
o
n
s
t
 
r
e
s
e
t
 
=
 
(
)
 
=
>
 
{


 
 
 
 
s
e
t
P
a
c
k
e
t
s
(
[
]
)
;


 
 
 
 
s
e
t
C
o
u
n
t
s
(
A
r
r
a
y
(
C
O
N
S
U
M
E
R
S
)
.
f
i
l
l
(
0
)
)
;


 
 
 
 
s
e
t
T
o
t
a
l
S
e
n
t
(
0
)
;


 
 
 
 
i
d
R
e
f
.
c
u
r
r
e
n
t
 
=
 
0
;


 
 
 
 
r
o
b
i
n
R
e
f
.
c
u
r
r
e
n
t
 
=
 
0
;


 
 
}
;




 
 
c
o
n
s
t
 
s
w
i
t
c
h
M
o
d
e
 
=
 
(
m
:
 
M
o
d
e
)
 
=
>
 
{


 
 
 
 
s
e
t
M
o
d
e
(
m
)
;


 
 
 
 
r
e
s
e
t
(
)
;


 
 
}
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
T
o
g
g
l
e
 
t
h
e
 
r
o
u
t
i
n
g
 
m
o
d
e
.
 
W
a
t
c
h
 
t
h
e
 
s
a
m
e
 
p
r
o
d
u
c
e
r
 
b
e
h
a
v
e
 
d
i
f
f
e
r
e
n
t
l
y
.
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
O
n
e
 
p
r
o
d
u
c
e
r
 
f
i
r
e
s
 
a
 
m
e
s
s
a
g
e
 
e
v
e
r
y
 
1
.
5
s
.
 
T
h
r
e
e
 
c
o
n
s
u
m
e
r
s
 
w
a
i
t
.
 
S
w
i
t
c
h
 
b
e
t
w
e
e
n
 
Q
u
e
u
e
 
a
n
d


 
 
 
 
 
 
 
 
P
u
b
/
S
u
b
 
a
n
d
 
w
a
t
c
h
 
t
h
e
 
r
o
u
t
i
n
g
 
c
h
a
n
g
e
.


 
 
 
 
 
 
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
 
m
b
-
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
q
u
e
u
e
"
,
 
"
p
u
b
s
u
b
"
]
 
a
s
 
M
o
d
e
[
]
)
.
m
a
p
(
(
m
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
a
c
t
i
v
e
 
=
 
m
o
d
e
 
=
=
=
 
m
;


 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
(


 
 
 
 
 
 
 
 
 
 
 
 
<
b
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
m
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
w
i
t
c
h
M
o
d
e
(
m
)
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
u
r
s
o
r
:
 
"
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
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
a
c
t
i
v
e
 
?
 
S
D
 
:
 
"
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
}
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
a
c
t
i
v
e
 
?
 
`
$
{
S
D
}
1
8
`
 
:
 
"
t
r
a
n
s
p
a
r
e
n
t
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
a
c
t
i
v
e
 
?
 
S
D
 
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
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
 
M
O
N
O
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
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
1
8
s
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
 
=
=
=
 
"
q
u
e
u
e
"
 
?
 
"
Q
u
e
u
e
 
(
w
o
r
k
 
d
i
s
t
r
i
b
u
t
i
o
n
)
"
 
:
 
"
P
u
b
/
S
u
b
 
(
b
r
o
a
d
c
a
s
t
)
"
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


 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
}
)
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


 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
#
0
b
1
2
2
0
"
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
2
,


 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
r
g
b
a
(
1
4
8
,
1
6
3
,
1
8
4
,
0
.
1
5
)
"
,


 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
2
2
,


 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
<
s
v
g
 
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
 
7
2
0
 
3
2
0
"
 
w
i
d
t
h
=
"
1
0
0
%
"
 
s
t
y
l
e
=
{
{
 
m
a
x
W
i
d
t
h
:
 
7
6
0
,
 
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
 
}
}
>


 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
r
o
d
u
c
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
N
o
d
e
R
e
c
t
 
x
=
{
2
0
}
 
y
=
{
1
3
0
}
 
w
=
{
1
2
0
}
 
h
=
{
6
0
}
 
l
a
b
e
l
=
"
P
r
o
d
u
c
e
r
"
 
s
u
b
=
"
e
m
i
t
s
 
@
1
.
5
s
"
 
c
o
l
o
r
=
{
S
D
}
 
p
u
l
s
e
=
{
r
u
n
n
i
n
g
}
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
B
r
o
k
e
r
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
N
o
d
e
R
e
c
t
 
x
=
{
3
0
0
}
 
y
=
{
1
3
0
}
 
w
=
{
1
2
0
}
 
h
=
{
6
0
}
 
l
a
b
e
l
=
"
B
r
o
k
e
r
"
 
s
u
b
=
{
m
o
d
e
 
=
=
=
 
"
q
u
e
u
e
"
 
?
 
"
q
u
e
u
e
"
 
:
 
"
t
o
p
i
c
"
}
 
c
o
l
o
r
=
{
S
D
}
 
/
>




 
 
 
 
 
 
 
 
 
 
{
/
*
 
C
o
n
s
u
m
e
r
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
[
0
,
 
1
,
 
2
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
 
=
 
3
0
 
+
 
i
 
*
 
1
0
0
;


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
m
o
d
e
 
=
=
=
 
"
q
u
e
u
e
"
 
?
 
S
D
 
:
 
P
U
R
P
L
E
;


 
 
 
 
 
 
 
 
 
 
 
 
r
e
t
u
r
n
 
<
N
o
d
e
R
e
c
t
 
k
e
y
=
{
i
}
 
x
=
{
5
8
0
}
 
y
=
{
y
}
 
w
=
{
1
2
0
}
 
h
=
{
5
0
}
 
l
a
b
e
l
=
{
`
C
o
n
s
u
m
e
r
 
$
{
i
 
+
 
1
}
`
}
 
s
u
b
=
{
`
$
{
c
o
u
n
t
s
[
i
]
}
 
r
e
c
e
i
v
e
d
`
}
 
c
o
l
o
r
=
{
c
}
 
/
>
;


 
 
 
 
 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
E
d
g
e
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
<
l
i
n
e
 
x
1
=
{
1
4
0
}
 
y
1
=
{
1
6
0
}
 
x
2
=
{
3
0
0
}
 
y
2
=
{
1
6
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
4
7
5
5
6
9
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
1
.
5
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
"
3
 
4
"
 
/
>


 
 
 
 
 
 
 
 
 
 
{
[
0
,
 
1
,
 
2
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
 
{


 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
 
=
 
5
5
 
+
 
i
 
*
 
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
i
}
 
x
1
=
{
4
2
0
}
 
y
1
=
{
1
6
0
}
 
x
2
=
{
5
8
0
}
 
y
2
=
{
y
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
4
7
5
5
6
9
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
1
.
5
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
"
3
 
4
"
 
/
>
;


 
 
 
 
 
 
 
 
 
 
}
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
P
r
o
d
u
c
e
r
 
-
>
 
B
r
o
k
e
r
 
p
a
c
k
e
t
 
*
/
}


 
 
 
 
 
 
 
 
 
 
{
p
a
c
k
e
t
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
m
o
t
i
o
n
.
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
p
p
-
$
{
p
a
c
k
e
t
s
[
p
a
c
k
e
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
.
i
d
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
S
D
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
 
c
x
:
 
1
4
0
,
 
c
y
:
 
1
6
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
 
c
x
:
 
3
0
0
,
 
c
y
:
 
1
6
0
 
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
5
,
 
e
a
s
e
:
 
"
l
i
n
e
a
r
"
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
)
}




 
 
 
 
 
 
 
 
 
 
{
/
*
 
B
r
o
k
e
r
 
-
>
 
C
o
n
s
u
m
e
r
 
p
a
c
k
e
t
s
 
*
/
}


 
 
 
 
 
 
 
 
 
 
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
p
a
c
k
e
t
s
.
m
a
p
(
(
p
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
y
 
=
 
5
5
 
+
 
p
.
t
o
 
*
 
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
 
(


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
m
o
t
i
o
n
.
c
i
r
c
l
e


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
`
b
c
-
$
{
p
.
i
d
}
`
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
r
=
{
5
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
i
l
l
=
{
m
o
d
e
 
=
=
=
 
"
q
u
e
u
e
"
 
?
 
S
D
 
:
 
P
U
R
P
L
E
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
 
c
x
:
 
4
2
0
,
 
c
y
:
 
1
6
0
,
 
o
p
a
c
i
t
y
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
 
c
x
:
 
5
8
0
,
 
c
y
:
 
y
,
 
o
p
a
c
i
t
y
:
 
[
0
,
 
1
,
 
1
,
 
0
]
 
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
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
,
 
d
e
l
a
y
:
 
0
.
3
,
 
t
i
m
e
s
:
 
[
0
,
 
0
.
1
,
 
0
.
9
,
 
1
]
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
/
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
)
;


 
 
 
 
 
 
 
 
 
 
 
 
}
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
s
v
g
>




 
 
 
 
 
 
 
 
{
/
*
 
C
o
u
n
t
s
 
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
3
 
g
a
p
-
2
 
m
t
-
4
"
>


 
 
 
 
 
 
 
 
 
 
{
[
0
,
 
1
,
 
2
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
i
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
 
b
o
r
d
e
r
C
o
l
o
r
:
 
m
o
d
e
 
=
=
=
 
"
q
u
e
u
e
"
 
?
 
S
D
 
:
 
P
U
R
P
L
E
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
0
p
x
 
1
2
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
8
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
(
m
o
d
e
 
=
=
=
 
"
q
u
e
u
e
"
 
?
 
S
D
 
:
 
P
U
R
P
L
E
)
}
1
0
`
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
t
e
x
t
A
l
i
g
n
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
,
 
c
o
l
o
r
:
 
m
o
d
e
 
=
=
=
 
"
q
u
e
u
e
"
 
?
 
S
D
 
:
 
P
U
R
P
L
E
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
e
m
"
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
4
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
C
O
N
S
U
M
E
R
 
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
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
1
.
4
r
e
m
"
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
 
8
0
0
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
c
o
u
n
t
s
[
i
]
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
/
d
i
v
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
 
m
t
-
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
5
 
}
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
R
u
n
n
i
n
g
(
(
r
)
 
=
>
 
!
r
)
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
b
t
n
(
S
D
)
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
{
r
u
n
n
i
n
g
 
?
 
<
P
a
u
s
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


 
 
 
 
 
 
 
 
 
 
 
 
{
r
u
n
n
i
n
g
 
?
 
"
p
a
u
s
e
"
 
:
 
"
r
e
s
u
m
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
5
 
}
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
r
e
s
e
t
}
 
s
t
y
l
e
=
{
b
t
n
(
N
E
U
T
R
A
L
)
}
>


 
 
 
 
 
 
 
 
 
 
 
 
<
R
o
t
a
t
e
C
c
w
 
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


 
 
 
 
 
 
 
 
 
 
 
 
r
e
s
e
t


 
 
 
 
 
 
 
 
 
 
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
d
i
v
 
s
t
y
l
e
=
{
{
 
f
l
e
x
:
 
1
 
}
}
 
/
>


 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
r
e
m
"
,
 
c
o
l
o
r
:
 
N
E
U
T
R
A
L
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
s
 
s
e
n
t
:
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
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
 
}
}
>
{
t
o
t
a
l
S
e
n
t
}
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
"
 
·
 
"
}


 
 
 
 
 
 
 
 
 
 
 
 
d
e
l
i
v
e
r
e
d
:
 
<
s
p
a
n
 
s
t
y
l
e
=
{
{
 
c
o
l
o
r
:
 
S
D
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
 
}
}
>
{
c
o
u
n
t
s
.
r
e
d
u
c
e
(
(
a
,
 
b
)
 
=
>
 
a
 
+
 
b
,
 
0
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
m
o
d
e
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
 
y
:
 
6
 
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
6
 
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
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{


 
 
 
 
 
 
 
 
 
 
 
 
 
 
m
a
r
g
i
n
T
o
p
:
 
1
4
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
p
a
d
d
i
n
g
:
 
"
1
2
p
x
 
1
4
p
x
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
"
r
g
b
a
(
1
5
,
2
3
,
4
2
,
0
.
6
)
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
8
6
r
e
m
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
c
o
l
o
r
:
 
"
#
e
5
e
7
e
b
"
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
,


 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
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
 
8
0
0
,
 
c
o
l
o
r
:
 
m
o
d
e
 
=
=
=
 
"
q
u
e
u
e
"
 
?
 
S
D
 
:
 
P
U
R
P
L
E
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
1
2
e
m
"
,
 
m
a
r
g
i
n
R
i
g
h
t
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
q
u
e
u
e
"
 
?
 
"
Q
U
E
U
E
 
M
O
D
E
"
 
:
 
"
P
U
B
/
S
U
B
 
M
O
D
E
"
}


 
 
 
 
 
 
 
 
 
 
 
 
<
/
s
p
a
n
>


 
 
 
 
 
 
 
 
 
 
 
 
{
m
o
d
e
 
=
=
=
 
"
q
u
e
u
e
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
?
 
"
E
a
c
h
 
m
e
s
s
a
g
e
 
g
o
e
s
 
t
o
 
e
x
a
c
t
l
y
 
o
n
e
 
c
o
n
s
u
m
e
r
 
(
r
o
u
n
d
-
r
o
b
i
n
 
s
h
o
w
n
)
.
 
T
o
t
a
l
 
d
e
l
i
v
e
r
i
e
s
 
=
 
t
o
t
a
l
 
s
e
n
t
.
 
A
d
d
 
a
 
4
t
h
 
c
o
n
s
u
m
e
r
 
a
n
d
 
e
a
c
h
 
o
n
e
 
w
o
u
l
d
 
g
e
t
 
f
e
w
e
r
 
m
e
s
s
a
g
e
s
 
—
 
l
o
a
d
 
d
i
s
t
r
i
b
u
t
e
s
.
"


 
 
 
 
 
 
 
 
 
 
 
 
 
 
:
 
"
E
a
c
h
 
m
e
s
s
a
g
e
 
g
o
e
s
 
t
o
 
A
L
L
 
c
o
n
s
u
m
e
r
s
.
 
T
o
t
a
l
 
d
e
l
i
v
e
r
i
e
s
 
=
 
t
o
t
a
l
 
s
e
n
t
 
×
 
N
 
c
o
n
s
u
m
e
r
s
.
 
A
d
d
 
a
 
4
t
h
 
c
o
n
s
u
m
e
r
 
a
n
d
 
E
V
E
R
Y
 
c
o
n
s
u
m
e
r
 
s
t
i
l
l
 
g
e
t
s
 
e
v
e
r
y
 
m
e
s
s
a
g
e
 
—
 
f
a
n
-
o
u
t
 
g
r
o
w
s
.
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
d
i
v
>


 
 
 
 
 
 
 
 
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


 
 
)
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
 
N
o
d
e
R
e
c
t
(
{
 
x
,
 
y
,
 
w
,
 
h
,
 
l
a
b
e
l
,
 
s
u
b
,
 
c
o
l
o
r
,
 
p
u
l
s
e
 
}
:
 
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
;
 
w
:
 
n
u
m
b
e
r
;
 
h
:
 
n
u
m
b
e
r
;
 
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
u
b
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
o
r
:
 
s
t
r
i
n
g
;
 
p
u
l
s
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
 
}
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
g
 
t
r
a
n
s
f
o
r
m
=
{
`
t
r
a
n
s
l
a
t
e
(
$
{
x
}
,
 
$
{
y
}
)
`
}
>


 
 
 
 
 
 
{
p
u
l
s
e
 
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
r
e
c
t


 
 
 
 
 
 
 
 
 
 
w
i
d
t
h
=
{
w
}


 
 
 
 
 
 
 
 
 
 
h
e
i
g
h
t
=
{
h
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
c
o
l
o
r
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
.
2
5
,
 
s
c
a
l
e
:
 
1
 
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
 
0
,
 
s
c
a
l
e
:
 
1
.
1
5
 
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
 
1
.
4
,
 
r
e
p
e
a
t
:
 
I
n
f
i
n
i
t
y
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


 
 
 
 
 
 
)
}


 
 
 
 
 
 
<
r
e
c
t
 
w
i
d
t
h
=
{
w
}
 
h
e
i
g
h
t
=
{
h
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
`
$
{
c
o
l
o
r
}
2
2
`
}
 
s
t
r
o
k
e
=
{
c
o
l
o
r
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
w
 
/
 
2
}
 
y
=
{
h
 
/
 
2
 
-
 
2
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
 
f
i
l
l
=
"
#
e
5
e
7
e
b
"
 
f
o
n
t
S
i
z
e
=
{
1
2
}
 
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
=
{
7
0
0
}
 
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
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
{
l
a
b
e
l
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
w
 
/
 
2
}
 
y
=
{
h
 
/
 
2
 
+
 
1
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
 
f
i
l
l
=
{
c
o
l
o
r
}
 
f
o
n
t
S
i
z
e
=
{
1
0
}
 
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
=
{
M
O
N
O
}
>


 
 
 
 
 
 
 
 
{
s
u
b
}


 
 
 
 
 
 
<
/
t
e
x
t
>


 
 
 
 
<
/
g
>


 
 
)
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
t
n
(
c
o
l
o
r
:
 
s
t
r
i
n
g
)
:
 
C
S
S
P
r
o
p
e
r
t
i
e
s
 
{


 
 
r
e
t
u
r
n
 
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
"
,


 
 
 
 
a
l
i
g
n
I
t
e
m
s
:
 
"
c
e
n
t
e
r
"
,


 
 
 
 
g
a
p
:
 
6
,


 
 
 
 
p
a
d
d
i
n
g
:
 
"
8
p
x
 
1
4
p
x
"
,


 
 
 
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
6
,


 
 
 
 
c
u
r
s
o
r
:
 
"
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
r
d
e
r
:
 
`
1
.
5
p
x
 
s
o
l
i
d
 
$
{
c
o
l
o
r
}
`
,


 
 
 
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
c
o
l
o
r
}
1
8
`
,


 
 
 
 
c
o
l
o
r
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
 
M
O
N
O
,


 
 
 
 
f
o
n
t
S
i
z
e
:
 
"
0
.
7
2
r
e
m
"
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


 
 
 
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,


 
 
 
 
t
e
x
t
T
r
a
n
s
f
o
r
m
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


 
 
}
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
T
A
B
 
3
 
-
 
W
h
e
n
 
t
o
 
u
s
e
 
w
h
i
c
h
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




c
o
n
s
t
 
P
I
C
K
S
 
=
 
[


 
 
{
 
t
a
s
k
:
 
"
P
r
o
c
e
s
s
 
v
i
d
e
o
 
u
p
l
o
a
d
s
 
o
n
 
a
 
w
o
r
k
e
r
 
f
l
e
e
t
"
,
 
p
i
c
k
:
 
"
Q
u
e
u
e
"
,
 
r
e
a
s
o
n
:
 
"
E
a
c
h
 
v
i
d
e
o
 
s
h
o
u
l
d
 
b
e
 
p
r
o
c
e
s
s
e
d
 
o
n
c
e
.
 
A
d
d
 
w
o
r
k
e
r
s
 
t
o
 
s
c
a
l
e
,
 
t
h
e
 
q
u
e
u
e
 
l
o
a
d
-
b
a
l
a
n
c
e
s
.
"
 
}
,


 
 
{
 
t
a
s
k
:
 
"
N
o
t
i
f
y
 
e
m
a
i
l
 
+
 
a
n
a
l
y
t
i
c
s
 
+
 
a
u
d
i
t
 
w
h
e
n
 
a
n
 
o
r
d
e
r
 
i
s
 
p
l
a
c
e
d
"
,
 
p
i
c
k
:
 
"
P
u
b
/
S
u
b
"
,
 
r
e
a
s
o
n
:
 
"
T
h
r
e
e
 
i
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
 
s
e
r
v
i
c
e
s
 
r
e
a
c
t
 
t
o
 
t
h
e
 
s
a
m
e
 
e
v
e
n
t
.
 
E
a
c
h
 
g
e
t
s
 
i
t
s
 
o
w
n
 
c
o
p
y
 
a
n
d
 
p
r
o
c
e
s
s
e
s
 
i
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
l
y
.
"
 
}
,


 
 
{
 
t
a
s
k
:
 
"
S
e
n
d
 
1
M
 
p
u
s
h
 
n
o
t
i
f
i
c
a
t
i
o
n
s
"
,
 
p
i
c
k
:
 
"
Q
u
e
u
e
"
,
 
r
e
a
s
o
n
:
 
"
O
n
e
 
p
u
s
h
 
p
e
r
 
d
e
v
i
c
e
.
 
W
o
r
k
e
r
s
 
c
o
m
p
e
t
e
 
f
o
r
 
t
a
s
k
s
.
 
P
u
b
/
s
u
b
 
h
e
r
e
 
w
o
u
l
d
 
m
e
a
n
 
e
v
e
r
y
 
n
o
t
i
f
i
c
a
t
i
o
n
 
g
e
t
s
 
d
e
l
i
v
e
r
e
d
 
N
 
t
i
m
e
s
.
"
 
}
,


 
 
{
 
t
a
s
k
:
 
"
R
e
a
l
-
t
i
m
e
 
s
t
o
c
k
 
p
r
i
c
e
 
→
 
5
0
k
 
s
u
b
s
c
r
i
b
e
d
 
d
a
s
h
b
o
a
r
d
s
"
,
 
p
i
c
k
:
 
"
P
u
b
/
S
u
b
"
,
 
r
e
a
s
o
n
:
 
"
E
v
e
r
y
 
d
a
s
h
b
o
a
r
d
 
w
a
n
t
s
 
e
v
e
r
y
 
t
i
c
k
.
 
T
h
i
s
 
i
s
 
t
h
e
 
c
a
n
o
n
i
c
a
l
 
b
r
o
a
d
c
a
s
t
.
"
 
}
,


 
 
{
 
t
a
s
k
:
 
"
I
m
a
g
e
 
r
e
s
i
z
e
 
j
o
b
s
 
f
r
o
m
 
p
h
o
t
o
 
u
p
l
o
a
d
"
,
 
p
i
c
k
:
 
"
Q
u
e
u
e
"
,
 
r
e
a
s
o
n
:
 
"
E
a
c
h
 
i
m
a
g
e
 
n
e
e
d
s
 
t
o
 
b
e
 
r
e
s
i
z
e
d
 
o
n
c
e
.
 
A
d
d
 
w
o
r
k
e
r
s
 
i
f
 
b
a
c
k
l
o
g
 
g
r
o
w
s
.
"
 
}
,


 
 
{
 
t
a
s
k
:
 
"
C
r
o
s
s
-
t
e
a
m
 
e
v
e
n
t
 
l
o
g
 
f
o
r
 
a
n
a
l
y
t
i
c
s
 
+
 
M
L
 
+
 
b
i
l
l
i
n
g
"
,
 
p
i
c
k
:
 
"
P
u
b
/
S
u
b
 
(
K
a
f
k
a
 
t
o
p
i
c
s
)
"
,
 
r
e
a
s
o
n
:
 
"
T
h
r
e
e
 
i
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
 
c
o
n
s
u
m
e
r
 
g
r
o
u
p
s
,
 
e
a
c
h
 
t
r
a
c
k
i
n
g
 
i
t
s
 
o
w
n
 
o
f
f
s
e
t
 
o
n
 
t
h
e
 
s
a
m
e
 
t
o
p
i
c
.
"
 
}
,


]
;




f
u
n
c
t
i
o
n
 
W
h
e
n
T
o
U
s
e
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
>


 
 
 
 
 
 
<
h
3
 
s
t
y
l
e
=
{
s
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
}
>
S
i
x
 
r
e
a
l
 
t
a
s
k
s
.
 
W
h
i
c
h
 
m
o
d
e
l
 
f
i
t
s
?
<
/
h
3
>


 
 
 
 
 
 
<
p
 
s
t
y
l
e
=
{
s
e
c
t
i
o
n
D
e
s
c
}
>


 
 
 
 
 
 
 
 
T
h
e
 
d
e
c
i
s
i
o
n
 
r
u
l
e
:
 
i
f
 
e
a
c
h
 
m
e
s
s
a
g
e
 
s
h
o
u
l
d
 
b
e
 
p
r
o
c
e
s
s
e
d
 
<
i
>
o
n
c
e
<
/
i
>
,
 
u
s
e
 
a
 
q
u
e
u
e
.
 
I
f
 
e
a
c
h


 
 
 
 
 
 
 
 
m
e
s
s
a
g
e
 
s
h
o
u
l
d
 
f
a
n
 
o
u
t
 
t
o
 
<
i
>
m
u
l
t
i
p
l
e
 
i
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
 
r
e
a
c
t
i
o
n
s
<
/
i
>
,
 
u
s
e
 
p
u
b
/
s
u
b
.


 
 
 
 
 
 
<
/
p
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
{
 
h
i
d
d
e
n
:
 
{
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
 
{
 
s
t
a
g
g
e
r
C
h
i
l
d
r
e
n
:
 
0
.
0
6
 
}
 
}
 
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
2
 
g
a
p
-
3
"


 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
{
P
I
C
K
S
.
m
a
p
(
(
p
)
 
=
>
 
{


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
i
s
P
u
b
S
u
b
 
=
 
p
.
p
i
c
k
.
s
t
a
r
t
s
W
i
t
h
(
"
P
u
b
"
)
;


 
 
 
 
 
 
 
 
 
 
c
o
n
s
t
 
c
 
=
 
i
s
P
u
b
S
u
b
 
?
 
P
U
R
P
L
E
 
:
 
S
D
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
k
e
y
=
{
p
.
t
a
s
k
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
8
 
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
,
 
e
a
s
e
:
 
[
0
.
1
6
,
 
1
,
 
0
.
3
,
 
1
]
 
}
 
}
,


 
 
 
 
 
 
 
 
 
 
 
 
 
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
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
 
y
:
 
-
2
 
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
 
t
y
p
e
:
 
"
s
p
r
i
n
g
"
,
 
s
t
i
f
f
n
e
s
s
:
 
4
0
0
,
 
d
a
m
p
i
n
g
:
 
2
5
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
 
 
s
t
y
l
e
=
{
{
 
p
a
d
d
i
n
g
:
 
"
1
4
p
x
 
1
6
p
x
"
,
 
b
o
r
d
e
r
:
 
"
1
p
x
 
s
o
l
i
d
 
v
a
r
(
-
-
e
n
g
-
b
o
r
d
e
r
)
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
1
0
 
}
}


 
 
 
 
 
 
 
 
 
 
 
 
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
f
l
e
x
"
,
 
a
l
i
g
n
I
t
e
m
s
:
 
"
f
l
e
x
-
s
t
a
r
t
"
,
 
j
u
s
t
i
f
y
C
o
n
t
e
n
t
:
 
"
s
p
a
c
e
-
b
e
t
w
e
e
n
"
,
 
g
a
p
:
 
1
2
,
 
m
a
r
g
i
n
B
o
t
t
o
m
:
 
8
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
s
p
a
n
 
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
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
)
"
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
9
r
e
m
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
4
 
}
}
>
{
p
.
t
a
s
k
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
F
a
m
i
l
y
:
 
M
O
N
O
,
 
f
o
n
t
S
i
z
e
:
 
"
0
.
6
6
r
e
m
"
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
 
8
0
0
,
 
c
o
l
o
r
:
 
c
,
 
l
e
t
t
e
r
S
p
a
c
i
n
g
:
 
"
0
.
0
8
e
m
"
,
 
p
a
d
d
i
n
g
:
 
"
3
p
x
 
8
p
x
"
,
 
b
o
r
d
e
r
R
a
d
i
u
s
:
 
4
,
 
b
o
r
d
e
r
:
 
`
1
p
x
 
s
o
l
i
d
 
$
{
c
}
5
5
`
,
 
b
a
c
k
g
r
o
u
n
d
:
 
`
$
{
c
}
1
4
`
,
 
w
h
i
t
e
S
p
a
c
e
:
 
"
n
o
w
r
a
p
"
 
}
}
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
p
.
p
i
c
k
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
d
i
v
>


 
 
 
 
 
 
 
 
 
 
 
 
 
 
<
d
i
v
 
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
 
"
0
.
8
4
r
e
m
"
,
 
c
o
l
o
r
:
 
"
v
a
r
(
-
-
e
n
g
-
t
e
x
t
-
m
u
t
e
d
)
"
,
 
l
i
n
e
H
e
i
g
h
t
:
 
1
.
5
5
 
}
}
>
{
p
.
r
e
a
s
o
n
}
<
/
d
i
v
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


 
 
)
;


}




/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/


/
*
 
 
A
c
t
i
v
i
t
y
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
*
/


/
*
 
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
=
 
*
/




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
 
S
D
_
L
5
_
P
u
b
S
u
b
A
c
t
i
v
i
t
y
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
 
}
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
 
E
n
g
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
d
e
f
"
,
 
l
a
b
e
l
:
 
"
D
e
f
i
n
i
t
i
o
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
D
e
f
i
n
i
t
i
o
n
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
d
e
m
o
"
,
 
l
a
b
e
l
:
 
"
W
a
t
c
h
 
I
t
 
R
o
u
t
e
"
,
 
i
c
o
n
:
 
<
R
a
d
i
o
 
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
M
o
d
e
D
e
m
o
 
/
>
 
}
,


 
 
 
 
{
 
i
d
:
 
"
r
e
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
W
h
e
n
 
t
o
 
U
s
e
 
W
h
i
c
h
"
,
 
i
c
o
n
:
 
<
G
l
o
b
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
W
h
e
n
T
o
U
s
e
 
/
>
 
}
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
 
E
n
g
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
Y
o
u
 
a
d
d
 
a
 
4
t
h
 
c
o
n
s
u
m
e
r
 
t
o
 
a
 
s
y
s
t
e
m
 
p
r
o
c
e
s
s
i
n
g
 
1
0
0
 
m
s
g
/
s
.
 
T
h
e
 
t
h
r
o
u
g
h
p
u
t
 
p
e
r
 
c
o
n
s
u
m
e
r
 
d
r
o
p
s
 
f
r
o
m
 
~
3
3
 
t
o
 
~
2
5
.
 
W
h
i
c
h
 
m
o
d
e
 
i
s
 
t
h
i
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
P
u
b
/
S
u
b
"
,
 
"
Q
u
e
u
e
"
,
 
"
R
o
u
n
d
-
r
o
b
i
n
 
p
u
b
/
s
u
b
"
,
 
"
B
o
t
h
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
I
n
 
a
 
q
u
e
u
e
,
 
t
o
t
a
l
 
w
o
r
k
 
i
s
 
d
i
v
i
d
e
d
 
a
c
r
o
s
s
 
c
o
n
s
u
m
e
r
s
.
 
M
o
r
e
 
c
o
n
s
u
m
e
r
s
 
=
 
e
a
c
h
 
d
o
e
s
 
l
e
s
s
.
 
I
n
 
p
u
b
/
s
u
b
,
 
e
a
c
h
 
c
o
n
s
u
m
e
r
 
p
r
o
c
e
s
s
e
s
 
A
L
L
 
m
e
s
s
a
g
e
s
 
r
e
g
a
r
d
l
e
s
s
 
o
f
 
c
o
u
n
t
 
—
 
s
o
 
a
d
d
i
n
g
 
m
o
r
e
 
w
o
u
l
d
n
'
t
 
l
o
w
e
r
 
p
e
r
-
c
o
n
s
u
m
e
r
 
t
h
r
o
u
g
h
p
u
t
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
O
r
d
e
r
 
p
l
a
c
e
d
 
e
v
e
n
t
 
t
r
i
g
g
e
r
s
 
e
m
a
i
l
-
s
e
n
d
,
 
i
n
v
e
n
t
o
r
y
-
d
e
c
r
e
m
e
n
t
,
 
a
n
d
 
f
r
a
u
d
-
c
h
e
c
k
.
 
B
e
s
t
 
m
o
d
e
l
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
n
e
 
q
u
e
u
e
 
w
i
t
h
 
3
 
c
o
n
s
u
m
e
r
s
 
c
o
m
p
e
t
i
n
g
.
"
,


 
 
 
 
 
 
 
 
"
P
u
b
/
S
u
b
 
t
o
p
i
c
 
w
i
t
h
 
3
 
s
u
b
s
c
r
i
b
e
r
s
 
(
e
a
c
h
 
i
t
s
 
o
w
n
 
q
u
e
u
e
/
c
o
n
s
u
m
e
r
 
g
r
o
u
p
)
.
"
,


 
 
 
 
 
 
 
 
"
R
E
S
T
 
c
a
l
l
s
 
i
n
 
s
e
r
i
a
l
.
"
,


 
 
 
 
 
 
 
 
"
A
 
s
h
a
r
e
d
 
d
a
t
a
b
a
s
e
 
t
a
b
l
e
.
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
T
h
e
s
e
 
a
r
e
 
t
h
r
e
e
 
i
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
 
r
e
a
c
t
i
o
n
s
 
t
o
 
t
h
e
 
s
a
m
e
 
e
v
e
n
t
.
 
P
u
b
/
s
u
b
 
g
i
v
e
s
 
e
a
c
h
 
a
 
s
e
p
a
r
a
t
e
 
c
o
p
y
 
a
n
d
 
l
e
t
s
 
t
h
e
m
 
s
c
a
l
e
 
a
n
d
 
f
a
i
l
 
i
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
l
y
.
 
A
 
s
h
a
r
e
d
 
q
u
e
u
e
 
w
o
u
l
d
 
l
e
t
 
t
h
e
m
 
r
a
c
e
 
f
o
r
 
w
h
o
 
h
a
n
d
l
e
s
 
e
a
c
h
 
o
r
d
e
r
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
K
a
f
k
a
 
c
o
n
s
u
m
e
r
 
g
r
o
u
p
s
 
e
l
e
g
a
n
t
l
y
 
u
n
i
f
y
 
b
o
t
h
 
m
o
d
e
l
s
.
 
H
o
w
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
y
 
d
o
n
'
t
.
"
,


 
 
 
 
 
 
 
 
"
W
i
t
h
i
n
 
a
 
s
i
n
g
l
e
 
c
o
n
s
u
m
e
r
 
g
r
o
u
p
,
 
p
a
r
t
i
t
i
o
n
s
 
a
r
e
 
q
u
e
u
e
d
;
 
a
c
r
o
s
s
 
c
o
n
s
u
m
e
r
 
g
r
o
u
p
s
,
 
t
h
e
 
s
a
m
e
 
m
e
s
s
a
g
e
s
 
a
r
e
 
p
u
b
/
s
u
b
-
b
r
o
a
d
c
a
s
t
.
"
,


 
 
 
 
 
 
 
 
"
C
o
n
s
u
m
e
r
 
g
r
o
u
p
s
 
o
n
l
y
 
d
o
 
p
u
b
/
s
u
b
.
"
,


 
 
 
 
 
 
 
 
"
C
o
n
s
u
m
e
r
 
g
r
o
u
p
s
 
o
n
l
y
 
d
o
 
q
u
e
u
e
.
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
s
u
m
e
r
s
 
w
i
t
h
i
n
 
a
 
g
r
o
u
p
 
s
h
a
r
e
 
p
a
r
t
i
t
i
o
n
s
 
(
w
o
r
k
 
d
i
s
t
r
i
b
u
t
i
o
n
 
=
 
q
u
e
u
e
)
.
 
D
i
f
f
e
r
e
n
t
 
c
o
n
s
u
m
e
r
 
g
r
o
u
p
s
 
r
e
a
d
 
i
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
l
y
 
w
i
t
h
 
t
h
e
i
r
 
o
w
n
 
o
f
f
s
e
t
s
 
(
p
u
b
/
s
u
b
 
b
r
o
a
d
c
a
s
t
)
.
 
S
a
m
e
 
b
r
o
k
e
r
,
 
b
o
t
h
 
s
e
m
a
n
t
i
c
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
W
h
y
 
i
s
 
f
a
n
-
o
u
t
 
p
u
b
/
s
u
b
 
m
o
r
e
 
e
x
p
e
n
s
i
v
e
 
t
h
a
n
 
a
 
q
u
e
u
e
 
a
t
 
s
c
a
l
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
P
u
b
/
S
u
b
 
u
s
e
s
 
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
.
"
,


 
 
 
 
 
 
 
 
"
T
o
t
a
l
 
d
e
l
i
v
e
r
i
e
s
 
m
u
l
t
i
p
l
y
 
b
y
 
t
h
e
 
n
u
m
b
e
r
 
o
f
 
s
u
b
s
c
r
i
b
e
r
s
,
 
s
o
 
a
 
1
M
 
m
s
g
/
s
 
t
o
p
i
c
 
w
i
t
h
 
5
 
s
u
b
s
c
r
i
b
e
r
s
 
a
c
t
u
a
l
l
y
 
m
o
v
e
s
 
5
M
 
m
s
g
/
s
 
o
f
 
n
e
t
w
o
r
k
 
+
 
p
r
o
c
e
s
s
i
n
g
.
"
,


 
 
 
 
 
 
 
 
"
S
u
b
s
c
r
i
b
e
r
s
 
a
r
e
 
s
l
o
w
e
r
.
"
,


 
 
 
 
 
 
 
 
"
B
r
o
k
e
r
s
 
n
e
e
d
 
e
x
t
r
a
 
d
i
s
k
s
.
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
L
i
n
e
a
r
 
f
a
n
-
o
u
t
 
i
s
 
t
h
e
 
c
o
s
t
.
 
A
 
t
o
p
i
c
 
w
i
t
h
 
N
 
s
u
b
s
c
r
i
b
e
r
s
 
t
u
r
n
s
 
e
a
c
h
 
m
e
s
s
a
g
e
 
i
n
t
o
 
N
 
d
e
l
i
v
e
r
i
e
s
.
 
C
a
p
a
c
i
t
y
 
p
l
a
n
n
i
n
g
 
h
a
s
 
t
o
 
a
c
c
o
u
n
t
 
f
o
r
 
t
o
t
a
l
 
d
e
l
i
v
e
r
i
e
s
,
 
n
o
t
 
j
u
s
t
 
p
u
b
l
i
s
h
e
d
 
m
e
s
s
a
g
e
s
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
E
n
g
i
n
e
e
r
i
n
g
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
P
u
b
/
S
u
b
 
v
s
 
Q
u
e
u
e
"


 
 
 
 
 
 
l
e
v
e
l
=
{
5
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
2
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
C
o
m
m
o
n
 
'
h
o
w
 
w
o
u
l
d
 
y
o
u
 
f
a
n
-
o
u
t
 
t
h
i
s
 
e
v
e
n
t
'
 
i
n
t
e
r
v
i
e
w
 
q
u
e
s
t
i
o
n
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




