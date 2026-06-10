
i
m
p
o
r
t
 
{
 
C
h
e
v
r
o
n
D
o
w
n
 
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
 
s
e
c
t
i
o
n
H
e
a
d
e
r
B
t
n
,
 
s
e
c
t
i
o
n
K
i
c
k
e
r
C
l
s
,
 
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
 
S
e
c
t
i
o
n
H
e
a
d
e
r
(
{


 
 
k
i
c
k
e
r
,


 
 
t
i
t
l
e
,


 
 
o
p
e
n
,


 
 
o
n
T
o
g
g
l
e
,


 
 
m
e
t
a
,


 
 
r
i
g
h
t
,


}
:
 
{


 
 
k
i
c
k
e
r
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
t
l
e
:
 
s
t
r
i
n
g
;


 
 
o
p
e
n
:
 
b
o
o
l
e
a
n
;


 
 
o
n
T
o
g
g
l
e
:
 
(
)
 
=
>
 
v
o
i
d
;


 
 
m
e
t
a
?
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
;


 
 
r
i
g
h
t
?
:
 
R
e
a
c
t
.
R
e
a
c
t
N
o
d
e
;


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
 
b
o
r
d
e
r
-
b
 
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
o
n
T
o
g
g
l
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
{
`
$
{
s
e
c
t
i
o
n
H
e
a
d
e
r
B
t
n
}
 
f
l
e
x
-
1
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
1
 
m
i
n
-
w
-
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
{
s
e
c
t
i
o
n
K
i
c
k
e
r
C
l
s
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


 
 
 
 
 
 
 
 
 
 
 
 
{
k
i
c
k
e
r
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
C
l
s
}
>


 
 
 
 
 
 
 
 
 
 
 
 
{
t
i
t
l
e
}


 
 
 
 
 
 
 
 
 
 
 
 
{
m
e
t
a
 
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


 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
{
m
e
t
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
C
h
e
v
r
o
n
D
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
4
 
h
-
4
 
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
t
r
a
n
s
f
o
r
m
 
d
u
r
a
t
i
o
n
-
2
0
0
 
s
h
r
i
n
k
-
0
 
$
{
o
p
e
n
 
?
 
"
r
o
t
a
t
e
-
1
8
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
r
i
g
h
t
 
&
&
 
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
r
-
4
 
s
h
r
i
n
k
-
0
"
>
{
r
i
g
h
t
}
<
/
d
i
v
>
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


